const { v4: uuidv4, validate: uuidValidate } = require("uuid");
const CommentLikeRepository = require("../../Domains/likes/CommentLikeRepository");
const NotFoundError = require("../../Commons/exceptions/NotFoundError");

class CommentLikeRepositoryPostgres extends CommentLikeRepository {
    constructor(pool) {
        super();
        this._pool = pool;
    }

    _validateUUIDOrThrow(id) {
        if (!uuidValidate(id)) {
            throw new NotFoundError("ID tidak valid");
        }
    }

    async addLike(like) {
        const id = uuidv4(); // UUID murni tanpa prefix/suffix
        const { commentId, owner } = like;

        this._validateUUIDOrThrow(commentId);

        const query = {
            text: "INSERT INTO user_comment_likes (id, comment, owner) VALUES ($1, $2, $3)",
            values: [id, commentId, owner],
        };

        await this._pool.query(query);
    }

    async getLikesByThreadId(threadId) {
        this._validateUUIDOrThrow(threadId);

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

        this._validateUUIDOrThrow(commentId);

        const query = {
            text: "DELETE FROM user_comment_likes WHERE comment = $1 AND owner = $2",
            values: [commentId, owner],
        };

        await this._pool.query(query);
    }

    async verifyUserCommentLike(like) {
        const { commentId, owner } = like;

        this._validateUUIDOrThrow(commentId);

        const query = {
            text: "SELECT 1 FROM user_comment_likes WHERE comment = $1 AND owner = $2",
            values: [commentId, owner],
        };

        const result = await this._pool.query(query);
        return !!result.rowCount;
    }
}

module.exports = CommentLikeRepositoryPostgres;
