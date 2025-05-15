const { v4: uuidv4 } = require("uuid");
const pool = require("../src/Infrastructures/database/postgres/pool");

const CommentsTableTestHelper = {
    async addComment({
        id = uuidv4(), // generate UUID murni tanpa prefix
        content = "A new comment",
        date = new Date().toISOString(),
        thread = uuidv4(),
        owner = uuidv4(),
        isDelete = false,
    }) {
        const query = {
            text: "INSERT INTO comments VALUES($1, $2, $3, $4, $5, $6)",
            values: [id, content, date, thread, owner, isDelete],
        };

        await pool.query(query);
    },

    async findCommentsById(id) {
        const query = {
            text: "SELECT * FROM comments WHERE id = $1",
            values: [id],
        };

        const result = await pool.query(query);
        return result.rows;
    },

    async cleanTable() {
        await pool.query("DELETE FROM comments WHERE 1=1");
    },
};

module.exports = CommentsTableTestHelper;
