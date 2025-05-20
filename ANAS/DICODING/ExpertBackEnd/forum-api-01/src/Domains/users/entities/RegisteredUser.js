const { v4: uuidv4, 
    validate: uuidValidate, 
    version: uuidVersion } = require("uuid");

class RegisteredUser {
    constructor(payload) {
        this._verifyPayload(payload);

        const { id = uuidv4(), username, fullname } = payload;

        this.id = id;
        this.username = username;
        this.fullname = fullname;
    }

    _verifyPayload({ id, username, fullname }) {
        if (!id || !username || !fullname) {
            throw new Error("REGISTERED_USER.NOT_CONTAIN_NEEDED_PROPERTY");
        }

        if (typeof username !== "string" || typeof fullname !== "string") {
            throw new Error("REGISTERED_USER.NOT_MEET_DATA_TYPE_SPECIFICATION");
        }

        if (id && (!uuidValidate(id) || uuidVersion(id) !== 4)) {
            throw new Error("REGISTERED_USER.ID_NOT_VALID_UUID_V4");
        }
    }
}

module.exports = RegisteredUser;
