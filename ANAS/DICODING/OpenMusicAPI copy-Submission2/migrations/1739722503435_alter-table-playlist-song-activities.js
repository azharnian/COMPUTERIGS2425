exports.up = (pgm) => {
    pgm.alterColumn("playlist_song_activities", "action", {
        type: "VARCHAR(50)",
        notNull: true,
    });
};


exports.down = (pgm) => {
    pgm.dropTable("playlist_song_activities");
};
