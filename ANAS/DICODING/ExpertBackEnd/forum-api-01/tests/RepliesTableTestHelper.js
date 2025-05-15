const { v4: uuidv4 } = require("uuid");
const pool = require("../src/Infrastructures/database/postgres/pool");

const RepliesTableTestHelper = {
    async addReply({
        id = uuidv4(),          // UUID murni untuk id
        content = "A new reply",
        date = new Date().toISOString(),
        comment = uuidv4(),     // UUID murni untuk comment id
        owner = uuidv4(),       // UUID murni untuk owner id
        isDelete = false,
    }) {
        const query = {
            text: "INSERT INTO replies VALUES($1, $2, $3, $4, $5, $6)",
            values: [id, content, date, comment, owner, isDelete],
        };

        await pool.query(query);
    },

    async findRepliesById(id) {
        const query = {
            text: "SELECT * FROM replies WHERE id = $1",
            values: [id],
        };

        const result = await pool.query(query);
        return result.rows;
    },

    async cleanTable() {
        await pool.query("DELETE FROM replies WHERE 1=1");
    },
};

module.exports = RepliesTableTestHelper;
