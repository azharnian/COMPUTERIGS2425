const { v4: uuidv4} = require("uuid");
const NotFoundError = require("../../Commons/exceptions/NotFoundError");
const AuthorizationError = require("../../Commons/exceptions/AuthorizationError");
const AddedReply = require("../../Domains/replies/entities/AddedReply");
const ReplyRepository = require("../../Domains/replies/ReplyRepository");

class ReplyRepositoryPostgres extends ReplyRepository {
    constructor(pool) {
        super();
        this._pool = pool;
    }

    async checkReplyAvailability(replyId, commentId) {
        const query = {
            text: "SELECT id, is_delete, comment FROM replies WHERE id = $1::uuid",
            values: [replyId],
        };

        try {
            const result = await this._pool.query(query);

            if (!result.rowCount) {
                throw new NotFoundError("balasan tidak ditemukan");
            }

            const reply = result.rows[0];

            if (reply.is_delete) {
                throw new NotFoundError("balasan tidak valid");
            }

            if (reply.comment !== commentId) {
                throw new NotFoundError("balasan dalam komentar tidak ditemukan");
            }
        } catch (error) {
        
            throw new NotFoundError("balasan tidak ditemukan");
        }
    }

    async verifyReplyOwner(replyId, owner) {

        const query = {
            text: "SELECT owner FROM replies WHERE id = $1",
            values: [replyId],
        };

        const result = await this._pool.query(query);

        const reply = result.rows[0];

        if (!reply || reply.owner !== owner) {
            throw new AuthorizationError("akses dilarang");
        }
    }

    async addReply(userId, commentId, newReply) {
        const { content } = newReply;
        const id = uuidv4();
        const date = new Date().toISOString();

        const query = {
            text: "INSERT INTO replies (id, content, date, comment, owner) VALUES($1, $2, $3, $4, $5) RETURNING id, content, owner",
            values: [id, content, date, commentId, userId],
        };

        const result = await this._pool.query(query);

        return new AddedReply(result.rows[0]);
    }

    async getRepliesByCommentId(commentId) {
        const query = {
            text: `
                SELECT replies.id, users.username, replies.date, replies.content, replies.is_delete 
                FROM replies 
                LEFT JOIN users ON users.id = replies.owner 
                WHERE replies.comment = $1::uuid
                ORDER BY replies.date ASC
            `,
            values: [commentId],
        };

        const result = await this._pool.query(query);
        return result.rows;
    }

    async getRepliesByThreadId(threadId) {
        const query = {
            text: `
                SELECT replies.*, users.username 
                FROM replies
                LEFT JOIN users ON users.id = replies.owner
                LEFT JOIN comments ON comments.id = replies.comment
                WHERE comments.thread = $1::uuid AND comments.is_delete = false
                ORDER BY replies.date ASC
            `,
            values: [threadId],
        };

        const result = await this._pool.query(query);
        return result.rows;
    }

    async deleteReplyById(replyId) {
        const query = {
            text: "UPDATE replies SET is_delete = true WHERE id = $1::uuid",
            values: [replyId],
        };

        await this._pool.query(query);
    }
}

module.exports = ReplyRepositoryPostgres;
