const { v4: uuidv4, 
    validate: uuidValidate } = require("uuid");

class AddedReply {
    constructor(payload) {
        this._verifyPayload(payload);

        const { id, content, owner } = payload;

        this.id = id || uuidv4();  // Jika id tidak diberikan, buat UUID v4 baru
        this.content = content;
        this.owner = owner;
    }

    _verifyPayload(payload) {
        const { id, content, owner } = payload;

        if (!content || !owner) {
            throw new Error("ADDED_REPLY.NOT_CONTAIN_NEEDED_PROPERTY");
        }

        if (
            typeof content !== "string" 
        ) {
            throw new Error("ADDED_REPLY.NOT_MEET_DATA_TYPE_SPECIFICATION");
        }

        if (id && !uuidValidate(id) && !uuidValidate(owner)) {
            throw new Error("ADDED_REPLY.ID_NOT_VALID_UUID_V4");
        }
    }
}

module.exports = AddedReply;
