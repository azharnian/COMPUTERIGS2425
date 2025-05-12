const { v4: uuidv4, 
    validate: uuidValidate, 
    version: uuidVersion } = require("uuid");

class AddedThread {
    constructor(payload) {
        this._verifyPayload(payload);

        const { id = uuidv4(), title, owner } = payload;

        this.id = id;
        this.title = title;
        this.owner = owner;
    }

    _verifyPayload(payload) {
        const { id, title, owner } = payload;

        if (!title || !owner) {
            throw new Error("ADDED_THREAD.NOT_CONTAIN_NEEDED_PROPERTY");
        }

        if ((id && typeof id !== "string") || typeof title !== "string" || typeof owner !== "string") {
            throw new Error("ADDED_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION");
        }

        if (id && (!uuidValidate(id) || uuidVersion(id) !== 4)) {
            throw new Error("ADDED_THREAD.ID_NOT_VALID_UUID_V4");
        }
    }
}

module.exports = AddedThread;
