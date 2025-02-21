exports.up = (pgm) => {

    pgm.createExtension("uuid-ossp", { ifNotExists: true });

    pgm.alterColumn("songs", "album_id", {
        type: "UUID",
        using: "album_id::uuid",
    });

    pgm.addConstraint(
        "songs",
        "fk_songs.album_id_albums.id",
        "FOREIGN KEY(album_id) REFERENCES albums(id) ON DELETE CASCADE"
    );
};

exports.down = (pgm) => {
    pgm.dropConstraint("songs", "fk_songs.album_id_albums.id");
};
