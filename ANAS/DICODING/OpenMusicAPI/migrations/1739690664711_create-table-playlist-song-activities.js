exports.up = (pgm) => {
    pgm.createTable("playlist_song_activities", {
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
        user_id: {
            type: "uuid",
            notNull: true,
        },
        action: {
            type: "uuid",
            notNull: true,
        },
        time: {
            type: "TIMESTAMP",
            notNull: true,
            default: pgm.func("CURRENT_TIMESTAMP"),
        },
    });

    pgm.addConstraint(
        "playlist_song_activities",
        "fk_playlist_song_activities.playlist_id_playlists.id",
        "FOREIGN KEY(playlist_id) REFERENCES playlists(id) ON DELETE CASCADE"
    );
};

exports.down = (pgm) => {
    pgm.dropTable("playlist_song_activities");
};
