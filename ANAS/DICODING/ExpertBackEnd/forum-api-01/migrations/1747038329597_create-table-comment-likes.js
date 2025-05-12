exports.up = (pgm) => {
    pgm.createTable("user_comment_likes", {
        id: {
            type: "UUID",
            primaryKey: true,
            default: pgm.func("gen_random_uuid()"), // Automatically generate UUID
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
    });
  
    pgm.addConstraint(
        "user_comment_likes",
        "unique_comment_and_owner",
        "UNIQUE(comment, owner)",
    );
};
  
exports.down = (pgm) => {
    pgm.dropTable("user_comment_likes");
};
  