const { v4: uuidv4 } = require("uuid");
const pool = require("../src/Infrastructures/database/postgres/pool");

const ThreadsTableTestHelper = {
    async addThread({
        id = uuidv4(),
        title = "A New Thread",
        body = "Thread body",
        date = new Date().toISOString(),
        owner = uuidv4(),
    }) {
        const query = {
            text: "INSERT INTO threads VALUES($1, $2, $3, $4, $5)",
            values: [id, title, body, date, owner],
        };

        await pool.query(query);
    },

    async findThreadsById(id) {
        const query = {
            text: "SELECT * FROM threads WHERE id = $1",
            values: [id],
        };

        const result = await pool.query(query);
        return result.rows;
    },

    async cleanTable() {
        await pool.query("DELETE FROM threads WHERE 1=1");
    },
};

module.exports = ThreadsTableTestHelper;
