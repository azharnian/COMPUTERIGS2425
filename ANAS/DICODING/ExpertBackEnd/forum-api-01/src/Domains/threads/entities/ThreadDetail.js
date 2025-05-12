const { validate: uuidValidate, 
    version: uuidVersion } = require("uuid");

class ThreadDetail {
    constructor(payload) {
        this._verifyPayload(payload);

        const {
            id, title, body, date, username, comments,
        } = payload;

        this.id = id;
        this.title = title;
        this.body = body;
        this.date = date;
        this.username = username;
        this.comments = comments;
    }

    _verifyPayload(payload) {
        const {
            id,
            title,
            body,
            date,
            username,
            comments,
        } = payload;

        if (!id || !title || !body || !date || !username || !comments) {
            throw new Error("THREAD_DETAIL.NOT_CONTAIN_NEEDED_PROPERTY");
        }

        if (
            typeof id !== "string"
            || typeof title !== "string"
            || typeof body !== "string"
            || typeof date !== "string"
            || typeof username !== "string"
            || !Array.isArray(comments)
        ) {
            throw new Error("THREAD_DETAIL.NOT_MEET_DATA_TYPE_SPECIFICATION");
        }

        if (!uuidValidate(id) || uuidVersion(id) !== 4) {
            throw new Error("THREAD_DETAIL.ID_NOT_VALID_UUID_V4");
        }
    }
}

module.exports = ThreadDetail;
