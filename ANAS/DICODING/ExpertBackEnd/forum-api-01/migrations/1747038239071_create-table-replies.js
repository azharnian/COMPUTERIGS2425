exports.up = (pgm) => {
    pgm.createTable("replies", {
        id: {
            type: "UUID",
            primaryKey: true,
            default: pgm.func("gen_random_uuid()"), // Automatically generate UUID
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
        comment: {
            type: "UUID",
            notNull: true,
            references: "comments",
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
    pgm.dropTable("replies");
};
  