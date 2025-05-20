const { v4: uuidv4 } = require("uuid");
const NotFoundError = require("../../Commons/exceptions/NotFoundError");
const AuthorizationError = require("../../Commons/exceptions/AuthorizationError");
const AddedComment = require("../../Domains/comments/entities/AddedComment");
const CommentRepository = require("../../Domains/comments/CommentRepository");

class CommentRepositoryPostgres extends CommentRepository {
    constructor(pool, idGenerator = uuidv4) {
        super();
        this._pool = pool;
        this._idGenerator = idGenerator;
    }

    async checkCommentAvailability(commentId, threadId) {
        const query = {
            text: "SELECT id, is_delete, thread FROM comments WHERE id = $1::uuid",
            values: [commentId],
        };
    
        try {
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
    
        } catch (error) {
            if (error.code === "22P02") {
                throw new NotFoundError("komentar tidak valid");
            }
            throw error;
        }
    }
    

    async verifyCommentOwner(id, owner) {

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

        const threadCheckQuery = {
            text: "SELECT 1 FROM threads WHERE id = $1",
            values: [threadId],
        };

        const threadResult = await this._pool.query(threadCheckQuery);

        if (!threadResult.rowCount) {
            throw new NotFoundError("Thread tidak ditemukan");
        }

        const id = this._idGenerator();
        const date = new Date().toISOString();

        const query = {
            text: "INSERT INTO comments (id, content, date, thread, owner) VALUES($1, $2, $3, $4, $5) RETURNING id, content, owner",
            values: [id, content, date, threadId, userId],
        };

        const result = await this._pool.query(query);

        return new AddedComment(result.rows[0]);
    }

    async getCommentsByThreadId(threadId) {
        
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
        const query = {
            text: "UPDATE comments SET is_delete = true WHERE id = $1",
            values: [id],
        };

        await this._pool.query(query);
    }
}

module.exports = CommentRepositoryPostgres;
