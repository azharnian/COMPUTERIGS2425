const { v4 } = require("uuid");
const { Pool } = require("pg");
const MiscError = require("../../exceptions/MiscError");

class CollaborationsService {
    constructor(usersService) {
        this._pool = new Pool();
        this._usersService = usersService;
    }

    async addCollaboration(playlistId, userId) {
        const id = v4();

        await this._usersService.getUserById(userId);

        const query = {
            text: "INSERT INTO collaborations VALUES($1, $2, $3) RETURNING id",
            values: [id, playlistId, userId],
        };

        const result = await this._pool.query(query);

        if (!result.rowCount) {
            throw new MiscError("Kolaborasi gagal ditambahkan");
        }

        return result.rows[0].id;
    }

    async deleteCollaboration(playlistId, userId) {
        const query = {
            text: "DELETE FROM collaborations WHERE playlist_id = $1 AND user_id = $2 RETURNING id",
            values: [playlistId, userId],
        };

        const result = await this._pool.query(query);

        if (!result.rowCount) {
            throw new MiscError("Kolaborasi gagal dihapus");
        }
    }

    async verifyCollaborator(playlistId, userId) {
        const query = {
            text: "SELECT * FROM collaborations WHERE playlist_id = $1 AND user_id = $2",
            values: [playlistId, userId],
        };
        const result = await this._pool.query(query);

        if (!result.rowCount) {
            throw new MiscError("Kolaborasi gagal diverifikasi");
        }
    }
}

module.exports = CollaborationsService;