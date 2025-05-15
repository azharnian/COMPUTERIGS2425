const { v4: uuidv4 } = require("uuid");
const pool = require("../src/Infrastructures/database/postgres/pool");

const CommentLikesTableTestHelper = {
    async addLike({
        id = uuidv4(),  // murni UUID tanpa prefix
        commentId = uuidv4(),
        owner = uuidv4(),
    }) {
        const query = {
            text: "INSERT INTO user_comment_likes (id, comment, owner) VALUES ($1, $2, $3)",
            values: [id, commentId, owner],
        };

        await pool.query(query);
    },

    async findLikeById(likeId) {
        const query = {
            text: "SELECT * FROM user_comment_likes WHERE id = $1",
            values: [likeId],
        };

        const result = await pool.query(query);
        return result.rows;
    },

    async findLikeByCommentIdAndUserId(commentId, owner) {
        const query = {
            text: "SELECT * FROM user_comment_likes WHERE comment = $1 AND owner = $2",
            values: [commentId, owner],
        };

        const result = await pool.query(query);
        return result.rows;
    },

    async cleanTable() {
        await pool.query("DELETE FROM user_comment_likes WHERE 1=1");
    },
};

module.exports = CommentLikesTableTestHelper;
