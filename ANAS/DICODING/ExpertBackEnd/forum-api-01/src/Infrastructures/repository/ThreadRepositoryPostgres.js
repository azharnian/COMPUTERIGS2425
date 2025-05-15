const { v4: uuidv4, validate: uuidValidate, version: uuidVersion } = require("uuid");
const NotFoundError = require("../../Commons/exceptions/NotFoundError");
const ThreadRepository = require("../../Domains/threads/ThreadRepository");
const AddedThread = require("../../Domains/threads/entities/AddedThread");

class ThreadRepositoryPostgres extends ThreadRepository {
    constructor(pool) {
        super();
        this._pool = pool;
    }

    _validateThreadId(id) {
        // ID harus UUID v4
        if (!uuidValidate(id) || uuidVersion(id) !== 4) {
            throw new NotFoundError("thread tidak ditemukan");
        }
    }

    async checkThreadAvailability(id) {
        this._validateThreadId(id);

        const query = {
            text: "SELECT id FROM threads WHERE id = $1",
            values: [id],
        };

        const result = await this._pool.query(query);

        if (!result.rowCount) {
            throw new NotFoundError("thread tidak ditemukan");
        }
    }

    async addThread(userId, newThread) {
        const { title, body } = newThread;
        const id = uuidv4();
        const date = new Date().toISOString();

        const query = {
            text: "INSERT INTO threads (id, title, body, date, owner) VALUES($1, $2, $3, $4, $5) RETURNING id, title, owner",
            values: [id, title, body, date, userId],
        };

        const result = await this._pool.query(query);

        return new AddedThread(result.rows[0]);
    }

    async getThreadById(id) {
        this._validateThreadId(id);

        const query = {
            text: `SELECT threads.id, threads.title, threads.body, threads.date::text, users.username
                   FROM threads
                   LEFT JOIN users ON users.id = threads.owner
                   WHERE threads.id = $1`,
            values: [id],
        };

        const result = await this._pool.query(query);

        if (!result.rowCount) {
            throw new NotFoundError("thread tidak ditemukan");
        }

        return result.rows[0];
    }
}

module.exports = ThreadRepositoryPostgres;
