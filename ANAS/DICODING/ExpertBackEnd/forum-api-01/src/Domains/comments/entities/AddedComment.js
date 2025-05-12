const { v4: uuidv4, validate: uuidValidate } = require("uuid");

class AddedComment {
    constructor(payload) {
        this._verifyPayload(payload);

        const { id, content, owner } = payload;

        // Jika id tidak diberikan, buat UUID v4 baru
        this.id = id || uuidv4();
        this.content = content;
        this.owner = owner;
    }

    _verifyPayload(payload) {
        const { id, content, owner } = payload;

        if (!id || !content || !owner) {
            throw new Error("ADDED_COMMENT.NOT_CONTAIN_NEEDED_PROPERTY");
        }

        if (
            typeof id !== "string" ||
            typeof content !== "string" ||
            typeof owner !== "string"
        ) {
            throw new Error("ADDED_COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION");
        }

        // Pastikan id yang diberikan adalah UUID v4
        if (id && !uuidValidate(id)) {
            throw new Error("ADDED_COMMENT.ID_NOT_VALID_UUID_V4");
        }
    }
}

module.exports = AddedComment;
