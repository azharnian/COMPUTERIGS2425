const { v4: uuidv4, validate: uuidValidate } = require("uuid");
const NotFoundError = require("../../Commons/exceptions/NotFoundError");
const AuthorizationError = require("../../Commons/exceptions/AuthorizationError");
const AddedComment = require("../../Domains/comments/entities/AddedComment");
const CommentRepository = require("../../Domains/comments/CommentRepository");

class CommentRepositoryPostgres extends CommentRepository {
    /**
     * 
     * @param {Pool} pool - koneksi pool ke database Postgres
     * @param {Function} idGenerator - fungsi untuk generate ID (default: uuidv4)
     */
    constructor(pool, idGenerator = uuidv4) {
        super();
        this._pool = pool;
        this._idGenerator = idGenerator;
    }

    _validateUUIDOrThrow(id) {
        if (!uuidValidate(id)) {
            throw new NotFoundError("ID tidak valid");
        }
    }

    async checkCommentAvailability(commentId, threadId) {
        this._validateUUIDOrThrow(commentId);
        this._validateUUIDOrThrow(threadId);

        const query = {
            text: "SELECT id, is_delete, thread FROM comments WHERE id = $1",
            values: [commentId],
        };

        const result = await this._pool.query(query);

        if (!result.rowCount) {
            throw new NotFoundError("komentar tidak ditemukan");
        }

        const comment = result.rows[0];

        if (comment.is_delete) {
            throw new NotFoundError("komentar tidak valid");
        }

        if (comment.thread !== threadId) {
            throw new NotFoundError("komentar dalam thread tidak ditemukan");
        }
    }

    async verifyCommentOwner(id, owner) {
        this._validateUUIDOrThrow(id);

        const query = {
            text: "SELECT owner FROM comments WHERE id = $1",
            values: [id],
        };

        const result = await this._pool.query(query);

        const comment = result.rows[0];

        if (!comment || comment.owner !== owner) {
            throw new AuthorizationError("akses dilarang");
        }
    }

    async addComment(userId, threadId, newComment) {
        const { content } = newComment;

        this._validateUUIDOrThrow(threadId);

        // Pastikan thread ada
        const threadCheckQuery = {
            text: "SELECT 1 FROM threads WHERE id = $1",
            values: [threadId],
        };

        const threadResult = await this._pool.query(threadCheckQuery);

        if (!threadResult.rowCount) {
            throw new NotFoundError("Thread tidak ditemukan");
        }

        const id = this._idGenerator(); // pakai idGenerator yang diterima di constructor
        const date = new Date().toISOString();

        const query = {
            text: "INSERT INTO comments (id, content, date, thread, owner) VALUES($1, $2, $3, $4, $5) RETURNING id, content, owner",
            values: [id, content, date, threadId, userId],
        };

        const result = await this._pool.query(query);

        return new AddedComment(result.rows[0]);
    }

    async getCommentsByThreadId(threadId) {
        this._validateUUIDOrThrow(threadId);

        // Validasi keberadaan thread
        const threadCheckQuery = {
            text: "SELECT 1 FROM threads WHERE id = $1",
            values: [threadId],
        };

        const threadResult = await this._pool.query(threadCheckQuery);

        if (!threadResult.rowCount) {
            throw new NotFoundError("Thread tidak ditemukan");
        }

        const query = {
            text: `
                SELECT comments.id, users.username, comments.date, comments.content, comments.is_delete 
                FROM comments 
                LEFT JOIN users ON users.id = comments.owner 
                WHERE comments.thread = $1 
                ORDER BY comments.date ASC
            `,
            values: [threadId],
        };

        const result = await this._pool.query(query);
        return result.rows;
    }

    async deleteCommentById(id) {
        this._validateUUIDOrThrow(id);

        const query = {
            text: "UPDATE comments SET is_delete = true WHERE id = $1",
            values: [id],
        };

        await this._pool.query(query);
    }
}

module.exports = CommentRepositoryPostgres;
