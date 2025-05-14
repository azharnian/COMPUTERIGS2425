const { v4: uuidv4 } = require('uuid');
const InvariantError = require("../../Commons/exceptions/InvariantError");
const RegisteredUser = require("../../Domains/users/entities/RegisteredUser");
const UserRepository = require("../../Domains/users/UserRepository");

class UserRepositoryPostgres extends UserRepository {
    constructor(pool) {
        super();
        this._pool = pool;
    }

    async verifyAvailableUsername(username) {
        const query = {
            text: "SELECT username FROM users WHERE username = $1",
            values: [username],
        };

        const result = await this._pool.query(query);

        if (result.rowCount) {
            throw new InvariantError("username tidak tersedia");
        }
    }

    async addUser(registerUser) {
        const { username, password, fullname } = registerUser;
        const id = uuidv4();

        const query = {
            text: "INSERT INTO users (id, username, password, fullname) VALUES($1, $2, $3, $4) RETURNING id, username, fullname",
            values: [id, username, password, fullname],
        };

        const result = await this._pool.query(query);

        return new RegisteredUser(result.rows[0]);
    }

    async getPasswordByUsername(username) {
        const query = {
            text: "SELECT password FROM users WHERE username = $1",
            values: [username],
        };

        const result = await this._pool.query(query);

        if (!result.rowCount) {
            throw new InvariantError("username tidak ditemukan");
        }

        return result.rows[0].password;
    }

    async getIdByUsername(username) {
        const query = {
            text: "SELECT id FROM users WHERE username = $1",
            values: [username],
        };

        const result = await this._pool.query(query);

        if (!result.rowCount) {
            throw new InvariantError("user tidak ditemukan");
        }

        return result.rows[0].id;
    }
}

module.exports = UserRepositoryPostgres;
