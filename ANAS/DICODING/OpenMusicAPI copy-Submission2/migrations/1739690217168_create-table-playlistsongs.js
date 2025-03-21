exports.up = (pgm) => {
    pgm.createTable("playlist_songs", {
        id: {
            type: "uuid",
            primaryKey: true,
            default: pgm.func("gen_random_uuid()"),
        },
        playlist_id: {
            type: "uuid",
            notNull: true,
        },
        song_id: {
            type: "uuid",
            notNull: true,
        },
    });

    pgm.addConstraint(
        "playlist_songs",
        "unique_playlist_id_and_song_id",
        "UNIQUE(playlist_id, song_id)"
    );
    pgm.addConstraint(
        "playlist_songs",
        "fk_playlist_songs.playlist_id_playlists.id",
        "FOREIGN KEY(playlist_id) REFERENCES playlists(id) ON DELETE CASCADE"
    );
    pgm.addConstraint(
        "playlist_songs",
        "fk_playlist_songs.song_id_songs.id",
        "FOREIGN KEY(song_id) REFERENCES songs(id) ON DELETE CASCADE"
    );
};

exports.down = (pgm) => {
    pgm.dropTable("playlist_songs");
};
