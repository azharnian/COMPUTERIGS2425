exports.up = (pgm) => {
    pgm.createTable("threads", {
        id: {
            type: "UUID",
            primaryKey: true,
            default: pgm.func("gen_random_uuid()"),
        },
        title: {
            type: "TEXT",
            notNull: true,
        },
        body: {
            type: "TEXT",
            notNull: true,
        },
        date: {
            type: "TIMESTAMP",
            notNull: true,
            default: pgm.func("current_timestamp"),
        },
        owner: {
            type: "UUID",
            notNull: true,
            references: "users",
        },
    });
};
  
exports.down = (pgm) => {
    pgm.dropTable("threads");
};
  