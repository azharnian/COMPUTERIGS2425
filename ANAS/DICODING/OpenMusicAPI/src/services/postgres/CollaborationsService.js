const { v4, validate: isUuid } = require("uuid");
const { Pool } = require("pg");
const MiscError = require("../../exceptions/MiscError");
const NotFoundError = require("../../exceptions/NotFoundError");

class CollaborationsService {
    constructor(usersService) {
        this._pool = new Pool();
        this._usersService = usersService;
    }

    _validateUUIDs(playlistId, userId) {
        if (!isUuid(playlistId)) throw new NotFoundError("Playlist tidak ditemukan");
        if (!isUuid(userId)) throw new NotFoundError("User tidak ditemukan");
    }

    async addCollaboration(playlistId, userId) {
        this._validateUUIDs(playlistId, userId);
        await this._usersService.getUserById(userId);

        const id = v4();
        const query = {
            text: "INSERT INTO collaborations VALUES($1, $2, $3) RETURNING id",
            values: [id, playlistId, userId],
        };

        const result = await this._pool.query(query);
        if (!result.rowCount) throw new MiscError("Kolaborasi gagal ditambahkan");

        return result.rows[0].id;
    }

    async deleteCollaboration(playlistId, userId) {
        this._validateUUIDs(playlistId, userId);

        const query = {
            text: "DELETE FROM collaborations WHERE playlist_id = $1 AND user_id = $2 RETURNING id",
            values: [playlistId, userId],
        };

        const result = await this._pool.query(query);
        if (!result.rowCount) throw new MiscError("Kolaborasi gagal dihapus");
    }

    async verifyCollaborator(playlistId, userId) {
        this._validateUUIDs(playlistId, userId);

        const query = {
            text: "SELECT 1 FROM collaborations WHERE playlist_id = $1 AND user_id = $2",
            values: [playlistId, userId],
        };

        const result = await this._pool.query(query);
        if (!result.rowCount) throw new MiscError("Kolaborasi gagal diverifikasi");
    }
}

module.exports = CollaborationsService;
