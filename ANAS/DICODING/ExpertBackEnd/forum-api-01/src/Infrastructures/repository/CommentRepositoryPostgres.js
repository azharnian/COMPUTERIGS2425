const { v4: uuidv4, validate: uuidValidate } = require("uuid");
const NotFoundError = require("../../Commons/exceptions/NotFoundError");
const AuthorizationError = require("../../Commons/exceptions/AuthorizationError");
const AddedComment = require("../../Domains/comments/entities/AddedComment");
const CommentRepository = require("../../Domains/comments/CommentRepository");

class CommentRepositoryPostgres extends CommentRepository {
    constructor(pool) {
        super();
        this._pool = pool;
    }

    // Validasi UUID untuk commentId dan threadId
    validateUUID(id) {
        if (!uuidValidate(id)) {
            throw new NotFoundError("ID tidak valid");
        }
    }

    async checkCommentAvailability(commentId, threadId) {
        this.validateUUID(commentId);  // Validasi UUID commentId
        this.validateUUID(threadId);   // Validasi UUID threadId

        const query = {
            text: "SELECT id, is_delete, thread FROM comments WHERE id = $1",
            values: [commentId],
        };

        const result = await this._pool.query(query);

        if (!result.rowCount) {
            throw new NotFoundError("komentar tidak ditemukan");
        }

        if (result.rows[0].is_delete) {
            throw new NotFoundError("komentar tidak valid");
        }

        if (result.rows[0].thread !== threadId) {
            throw new NotFoundError("komentar dalam thread tidak ditemukan");
        }
    }

    async verifyCommentOwner(id, owner) {
        this.validateUUID(id); // Validasi UUID commentId

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

    // Validasi threadId sebelum menambahkan komentar
    async addComment(userId, threadId, newComment) {
        const { content } = newComment;

        // Validasi threadId menggunakan UUID
        this.validateUUID(threadId); 

        // Validasi keberadaan thread dengan threadId
        const threadCheckQuery = {
            text: "SELECT 1 FROM threads WHERE id = $1",
            values: [threadId],
        };

        const threadResult = await this._pool.query(threadCheckQuery);

        if (!threadResult.rowCount) {
            throw new NotFoundError("Thread tidak ditemukan");
        }

        const id = uuidv4();
        const date = new Date().toISOString();

        const query = {
            text: "INSERT INTO comments (id, content, date, thread, owner) VALUES($1, $2, $3, $4, $5) RETURNING id, content, owner",
            values: [id, content, date, threadId, userId],
        };

        const result = await this._pool.query(query);

        return new AddedComment(result.rows[0]);
    }

    // Validasi threadId sebelum mengambil komentar berdasarkan threadId
    async getCommentsByThreadId(threadId) {
        this.validateUUID(threadId); // Validasi threadId menggunakan UUID

        // Validasi keberadaan thread dengan threadId
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
        this.validateUUID(id); // Validasi commentId menggunakan UUID

        const query = {
            text: "UPDATE comments SET is_delete = true WHERE id = $1",
            values: [id],
        };

        await this._pool.query(query);
    }
}

module.exports = CommentRepositoryPostgres;
