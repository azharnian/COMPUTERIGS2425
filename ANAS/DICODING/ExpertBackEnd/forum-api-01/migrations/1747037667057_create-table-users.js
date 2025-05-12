exports.up = (pgm) => {
    pgm.sql("CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";");
  
    pgm.createTable("users", {
        id: {
            type: "UUID",
            primaryKey: true,
            default: pgm.func("uuid_generate_v4()"),
        },
        username: {
            type: "VARCHAR(50)",
            notNull: true,
            unique: true,
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
    pgm.sql("DROP EXTENSION IF EXISTS \"uuid-ossp\";");
};  