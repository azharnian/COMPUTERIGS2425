exports.up = (pgm) => {
    pgm.createTable("collaborations", {
        id: {
            type: "uuid",
            primaryKey: true,
            default: pgm.func("gen_random_uuid()"),
        },
        playlist_id: {
            type: "uuid",
            notNull: true,
        },
        user_id: {
            type: "uuid",
            notNull: true,
        },
    });

    pgm.addConstraint(
        "collaborations",
        "unique_playlist_id_and_user_id",
        "UNIQUE(playlist_id, user_id)"
    );

    pgm.addConstraint(
        "collaborations",
        "fk_collaborations.playlist_id_playlists.id",
        "FOREIGN KEY(playlist_id) REFERENCES playlists(id) ON DELETE CASCADE"
    );

    pgm.addConstraint(
        "collaborations",
        "fk_collaborations.user_id_users.id",
        "FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE"
    );
};

exports.down = (pgm) => {
    pgm.dropTable("collaborations");
};
