const { v4, validate: isUuid } = require("uuid");
const { Pool } = require("pg");
const MiscError = require("../../exceptions/MiscError");
const NotFoundError = require("../../exceptions/NotFoundError");
const { mapDBAlbumsToModel } = require("../../utils");

class AlbumsService {
    constructor() {
        this._pool = new Pool();
    }

    async addAlbum({ name, year }) {
        const id = v4();
        const insertedAt = new Date().toISOString();

        const query = {
            text: "INSERT INTO albums VALUES($1, $2, $3, $4, $4) RETURNING id",
            values: [
                id, 
                name, 
                year, 
                insertedAt
            ],
        };

        const result = await this._pool.query(query);

        if (!result.rows[0].id) {
            throw new MiscError("Album gagal ditambahkan");
        }

        return result.rows[0].id;
    }

    async getAlbumById(id) {
        if (!isUuid(id)) {
            throw new NotFoundError("Album tidak ditemukan");
        }

        const query = {
            text: "SELECT * FROM albums WHERE id = $1",
            values: [id],
        };
        const album = await this._pool.query(query);

        if (!album.rowCount) {
            throw new NotFoundError("Album tidak ditemukan");
        }

        const querySongs = {
            text: "SELECT id, title, performer FROM songs WHERE album_id = $1",
            values: [id],
        };
        const songs = await this._pool.query(querySongs);

        const transformedAlbum = mapDBAlbumsToModel({
            ...album.rows[0],
            songs: songs.rows,
        });

        return transformedAlbum;
    }

    async editAlbumById(id, { name, year }) {
        if (!isUuid(id)) {
            throw new NotFoundError("Gagal memperbarui album. Id tidak ditemukan");
        }

        const updatedAt = new Date().toISOString();
        const query = {
            text: "UPDATE albums SET name = $1, year = $2, updated_at = $3 WHERE id = $4 RETURNING id",
            values: [name, year, updatedAt, id],
        };

        const result = await this._pool.query(query);

        if (!result.rowCount) {
            throw new NotFoundError(
                "Gagal memperbarui album. Id tidak ditemukan"
            );
        }
    }

    async deleteAlbumById(id) {
        if (!isUuid(id)) {
            throw new NotFoundError("Gagal menghapus album. Id tidak ditemukan");
        }

        const query = {
            text: "DELETE FROM albums WHERE id = $1 RETURNING id",
            values: [id],
        };

        const result = await this._pool.query(query);

        if (!result.rowCount) {
            throw new NotFoundError(
                "Gagal menghapus album. Id tidak ditemukan"
            );
        }
    }
}

module.exports = AlbumsService;