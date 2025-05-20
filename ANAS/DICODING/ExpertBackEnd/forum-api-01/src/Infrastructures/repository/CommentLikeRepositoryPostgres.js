const { v4: uuidv4 } = require("uuid");
const CommentLikeRepository = require("../../Domains/likes/CommentLikeRepository");
const NotFoundError = require("../../Commons/exceptions/NotFoundError");

class CommentLikeRepositoryPostgres extends CommentLikeRepository {
    constructor(pool) {
        super();
        this._pool = pool;
    }

    async addLike(like) {
        const id = uuidv4();
        const { commentId, owner } = like;
    
        const query = {
            text: "INSERT INTO user_comment_likes (id, comment, owner) VALUES ($1, $2::uuid, $3::uuid)",
            values: [id, commentId, owner],
        };
    
        try {
            await this._pool.query(query);
        } catch (error) {
            if (error.code === "22P02") {
                // Error code for invalid UUID format
                throw new NotFoundError("komentar tidak valid");
            }
            throw error;
        }
    }

    async getLikesByThreadId(threadId) {
        const query = {
            text: `
                SELECT user_comment_likes.* 
                FROM user_comment_likes 
                LEFT JOIN comments ON comments.id = user_comment_likes.comment
                WHERE comments.thread = $1
            `,
            values: [threadId],
        };

        const result = await this._pool.query(query);
        return result.rows;
    }

    async deleteLike(like) {
        const { commentId, owner } = like;

        const query = {
            text: "DELETE FROM user_comment_likes WHERE comment = $1 AND owner = $2",
            values: [commentId, owner],
        };

        await this._pool.query(query);
    }

    async verifyUserCommentLike(like) {
        const { commentId, owner } = like;

        const query = {
            text: "SELECT 1 FROM user_comment_likes WHERE comment = $1 AND owner = $2",
            values: [commentId, owner],
        };

        const result = await this._pool.query(query);
        return !!result.rowCount;
    }
}

module.exports = CommentLikeRepositoryPostgres;
