exports.up = (pgm) => {
    pgm.createTable("playlists", {
        id: {
            type: "uuid",
            primaryKey: true,
            default: pgm.func("gen_random_uuid()"),
        },
        name: {
            type: "VARCHAR(50)",
            notNull: true,
        },
        owner: {
            type: "uuid",
            notNull: true,
        },
    });

    pgm.addConstraint(
        "playlists",
        "fk_playlists.owner_users.id",
        "FOREIGN KEY(owner) REFERENCES users(id) ON DELETE CASCADE"
    );
};

exports.down = (pgm) => {
    pgm.dropTable("playlists");
};
