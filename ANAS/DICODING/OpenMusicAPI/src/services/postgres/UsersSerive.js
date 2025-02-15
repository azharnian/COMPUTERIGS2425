const { v4 } = require("uuid");
const { validate: isUuid } = require("uuid");
const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const MiscError = require("../../exceptions/MiscError");
const NotFoundError = require("../../exceptions/NotFoundError");
const AuthenticationError = require("../../exceptions/AuthenticationError");

class UsersService {
    constructor() {
        this._pool = new Pool();
    }

    async addUser({ username, fullname, password }) {
        await this.verifyUsername(username);

        const id = v4();
        const hashedPassword = await bcrypt.hash(password, 10);

        const query = {
            text: "INSERT INTO users VALUES($1, $2, $3, $4) RETURNING id",
            values: [id, username, hashedPassword, fullname],
        };

        const result = await this._pool.query(query);

        if (!result.rowCount) {
            throw new MiscError("User gagal ditambahkan");
        }

        return result.rows[0].id;
    }

    async verifyUsername(username) {
        const query = {
            text: "SELECT username FROM users WHERE username = $1",
            values: [username],
        };

        const result = await this._pool.query(query);

        if (result.rowCount) {
            throw new MiscError(
                "Gagal menambahkan user. Username sudah digunakan."
            );
        }
    }

    async getUserById(userId) {
        if (!isUuid(id)) {
            throw new NotFoundError("User tidak ditemukan");
        }

        const query = {
            text: "SELECT id, username, fullname FROM users WHERE id = $1",
            values: [userId],
        };

        const result = await this._pool.query(query);

        if (!result.rowCount) {
            throw new NotFoundError("User tidak ditemukan");
        }

        return result.rows[0];
    }

    async verifyUserCredential(username, password) {
        const query = {
            text: "SELECT id, password FROM users WHERE username = $1",
            values: [username],
        };
        const result = await this._pool.query(query);

        if (!result.rowCount) {
            throw new AuthenticationError("Kredensial yang Anda berikan salah");
        }

        const { id, password: hashedPassword } = result.rows[0];

        const match = await bcrypt.compare(password, hashedPassword);

        if (!match) {
            throw new AuthenticationError("Kredensial yang Anda berikan salah");
        }

        return id;
    }

    async getUsersByUsername(username) {
        const query = {
            text: "SELECT id, username, fullname FROM users WHERE username LIKE $1",
            values: [`%${username}%`],
        };
        const result = await this._pool.query(query);
        return result.rows;
    }
}

module.exports = UsersService;