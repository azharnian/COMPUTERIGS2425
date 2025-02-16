const { v4, validate: isUuid } = require("uuid");
const { Pool } = require("pg");
const MiscError = require("../../exceptions/MiscError");
const NotFoundError = require("../../exceptions/NotFoundError");
const { mapDBSongsToModel, mapDBSongsToModelDetail } = require("../../utils");

class SongsService {
    constructor() {
        this._pool = new Pool();
    }

    _validateUuid(id, errorMessage) {
        if (!isUuid(id)) {
            throw new NotFoundError(errorMessage);
        }
    }

    async addSong({ title, year, performer, genre, duration, albumId }) {
        const id = v4();
        const insertedAt = new Date().toISOString();
        const updatedAt = insertedAt;

        const query = {
            text: "INSERT INTO songs VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id",
            values: [
                id,
                title,
                year,
                genre,
                performer,
                duration,
                albumId,
                insertedAt,
                updatedAt,
            ],
        };

        const result = await this._pool.query(query);

        if (!result.rows[0].id) {
            throw new MiscError("Lagu gagal ditambahkan");
        }

        return result.rows[0].id;
    }

    async getSongs(title, performer) {
        let baseQuery = "SELECT * FROM songs";
        const values = [];
        const conditions = [];

        if (title) {
            conditions.push(`title ILIKE $${conditions.length + 1}`);
            values.push(`%${title}%`);
        }

        if (performer) {
            conditions.push(`performer ILIKE $${conditions.length + 1}`);
            values.push(`%${performer}%`);
        }

        if (conditions.length > 0) {
            baseQuery += " WHERE " + conditions.join(" AND ");
        }

        const query = {
            text: baseQuery,
            values,
        };

        const songs = await this._pool.query(query);
        return songs.rows.map(mapDBSongsToModel);
    }

    async getSongById(id) {
        this._validateUuid(id, "Lagu tidak ditemukan");

        const query = {
            text: "SELECT * FROM songs WHERE id = $1",
            values: [id],
        };
        const song = await this._pool.query(query);

        if (!song.rowCount) {
            throw new NotFoundError("Lagu tidak ditemukan");
        }

        return mapDBSongsToModelDetail(song.rows[0]);
    }

    async editSongById(id, { title, year, performer, genre, duration }) {
        this._validateUuid(id, "Gagal memperbarui lagu. Id tidak ditemukan");

        const updatedAt = new Date().toISOString();
        const query = {
            text: "UPDATE songs SET title = $1, year = $2, genre = $3, performer = $4, duration = $5, updated_at = $6 WHERE id = $7 RETURNING id",
            values: [title, year, genre, performer, duration, updatedAt, id],
        };

        const result = await this._pool.query(query);

        if (!result.rowCount) {
            throw new NotFoundError("Gagal memperbarui lagu. Id tidak ditemukan");
        }
    }

    async deleteSongById(id) {
        this._validateUuid(id, "Gagal menghapus lagu. Id tidak ditemukan");

        const query = {
            text: "DELETE FROM songs WHERE id = $1 RETURNING id",
            values: [id],
        };

        const result = await this._pool.query(query);

        if (!result.rowCount) {
            throw new NotFoundError("Gagal menghapus lagu. Id tidak ditemukan");
        }
    }
}

module.exports = SongsService;