const { v4, validate: isUuid } = require("uuid");
const { Pool } = require("pg");
const AuthorizationError = require("../../exceptions/AuthorizationError");
const MiscError = require("../../exceptions/MiscError");
const NotFoundError = require("../../exceptions/NotFoundError");

class PlaylistsService {
    constructor(collaborationService, songsService) {
        this._pool = new Pool();
        this._collaborationService = collaborationService;
        this._songsService = songsService;
    }

    _validateUUIDs(...ids) {
        for (const id of ids) {
            if (!isUuid(id)) throw new NotFoundError("Data tidak ditemukan");
        }
    }

    async addPlaylist({ name, owner }) {
        const id = v4();
        const query = {
            text: "INSERT INTO playlists VALUES($1, $2, $3) RETURNING id",
            values: [id, name, owner],
        };

        const result = await this._pool.query(query);
        if (!result.rowCount) throw new MiscError("Playlist gagal ditambahkan");

        return result.rows[0].id;
    }

    async getPlaylists(owner) {
        const query = {
            text: `SELECT playlists.id, playlists.name, users.username FROM playlists
            LEFT JOIN users ON users.id = playlists.owner
            LEFT JOIN collaborations ON collaborations.playlist_id = playlists.id
            WHERE playlists.owner = $1 OR collaborations.user_id = $1`,
            values: [owner],
        };

        const result = await this._pool.query(query);
        return result.rows;
    }

    async getPlaylistById(playlistId) {
        this._validateUUIDs(playlistId);

        const query = {
            text: `SELECT playlists.id, playlists.name, users.username 
            FROM playlists
            JOIN users ON users.id = playlists.owner
            WHERE playlists.id = $1`,
            values: [playlistId],
        };

        const result = await this._pool.query(query);
        if (!result.rowCount) throw new NotFoundError("Playlist tidak ditemukan");

        return result.rows[0];
    }

    async deletePlaylistById(id) {
        this._validateUUIDs(id);

        const query = {
            text: "DELETE FROM playlists WHERE id = $1 RETURNING id",
            values: [id],
        };

        const result = await this._pool.query(query);
        if (!result.rowCount) throw new NotFoundError("Playlist gagal dihapus. Id tidak ditemukan");
    }

    async addSongToPlaylist(playlistId, songId) {
        this._validateUUIDs(playlistId, songId);
        await this._songsService.getSongById(songId);

        const id = v4();
        const query = {
            text: "INSERT INTO playlist_songs VALUES($1, $2, $3) RETURNING id",
            values: [id, playlistId, songId],
        };

        const result = await this._pool.query(query);
        if (!result.rowCount) throw new MiscError("Lagu gagal ditambahkan ke playlist");
    }

    async getSongsFromPlaylist(playlistId) {
        this._validateUUIDs(playlistId);

        const query = {
            text: `SELECT songs.id, songs.title, songs.performer FROM songs
            LEFT JOIN playlist_songs ON songs.id = playlist_songs.song_id
            WHERE playlist_songs.playlist_id = $1`,
            values: [playlistId],
        };

        const result = await this._pool.query(query);
        return result.rows;
    }

    async deleteSongFromPlaylist(playlistId, songId) {
        this._validateUUIDs(playlistId, songId);

        const query = {
            text: "DELETE FROM playlist_songs WHERE playlist_id = $1 AND song_id = $2 RETURNING id",
            values: [playlistId, songId],
        };

        const result = await this._pool.query(query);
        if (!result.rowCount) throw new MiscError("Lagu gagal dihapus");
    }

    async verifyPlaylistOwner(id, owner) {
        this._validateUUIDs(id);

        const query = {
            text: "SELECT owner FROM playlists WHERE id = $1",
            values: [id],
        };

        const result = await this._pool.query(query);
        if (!result.rowCount) throw new NotFoundError("Playlist tidak ditemukan");

        if (result.rows[0].owner !== owner) {
            throw new AuthorizationError("Anda tidak berhak mengakses resource ini");
        }
    }

    async verifyPlaylistAccess(playlistId, userId) {
        this._validateUUIDs(playlistId, userId);

        try {
            await this.verifyPlaylistOwner(playlistId, userId);
        } catch (error) {
            if (error instanceof NotFoundError) throw error;
            await this._collaborationService.verifyCollaborator(playlistId, userId);
        }
    }

    async addActivity({ playlistId, songId, credentialId, action }) {
        this._validateUUIDs(playlistId, songId, credentialId);

        const id = v4();
        const query = {
            text: "INSERT INTO playlist_song_activities VALUES($1, $2, $3, $4, $5, NOW()) RETURNING id",
            values: [id, playlistId, songId, credentialId, action],
        };

        const result = await this._pool.query(query);
        if (!result.rowCount) throw new MiscError("Activity gagal ditambahkan");
    }

    async getActivitiesByPlaylistId(playlistId) {
        this._validateUUIDs(playlistId);

        const query = {
            text: `SELECT users.username, songs.title, psa.action, psa.time
            FROM playlist_song_activities psa
            JOIN users ON users.id = psa.credential_id
            JOIN songs ON songs.id = psa.song_id
            WHERE psa.playlist_id = $1
            ORDER BY psa.time ASC`,
            values: [playlistId],
        };

        const result = await this._pool.query(query);
        return result.rows;
    }
}

module.exports = PlaylistsService;
