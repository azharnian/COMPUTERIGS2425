exports.up = (pgm) => {
    pgm.createTable("comments", {
        id: {
            type: "UUID",
            primaryKey: true,
            default: pgm.func("gen_random_uuid()"),
        },
        content: {
            type: "TEXT",
            notNull: true,
        },
        date: {
            type: "TIMESTAMP",
            notNull: true,
            default: pgm.func("current_timestamp"),
        },
        thread: {
            type: "UUID",
            notNull: true,
            references: "threads",
        },
        owner: {
            type: "UUID",
            notNull: true,
            references: "users",
        },
        is_delete: {
            type: "boolean",
            notNull: false,
            default: false,
        },
    });
};
  
exports.down = (pgm) => {
    pgm.dropTable("comments");
};
  