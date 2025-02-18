exports.up = (pgm) => {
    pgm.createTable("users", {
        id: {
            type: "uuid",
            primaryKey: true,
            default: pgm.func("gen_random_uuid()"),
        },
        username: {
            type: "VARCHAR(50)",
            unique: true,
            notNull: true,
        },
        password: {
            type: "TEXT",
            notNull: true,
        },
        fullname: {
            type: "TEXT",
            notNull: true,
        },
    });
};

exports.down = (pgm) => {
    pgm.dropTable("users");
};
