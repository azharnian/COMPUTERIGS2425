const { v4: uuidv4, 
    validate: uuidValidate, 
    version: uuidVersion } = require("uuid");

class ReplyDetail {
    constructor(payload) {
        this._verifyPayload(payload);

        const {
            id, username, content, date, is_delete,
        } = payload;

        this.id = id || uuidv4();  // Jika id tidak diberikan, buat UUID v4 baru
        this.username = username;
        this.content = is_delete ? "**balasan telah dihapus**" : content;
        this.date = date;
    }

    _verifyPayload(payload) {
        const { id, username, content, date } = payload;

        if (!id || !username || !content || !date) {
            throw new Error("REPLY_DETAIL.NOT_CONTAIN_NEEDED_PROPERTY");
        }

        if (
            typeof id !== "string" ||
            typeof username !== "string" ||
            typeof content !== "string" ||
            (typeof date !== "string" && typeof date !== "object")
        ) {
            throw new Error("REPLY_DETAIL.NOT_MEET_DATA_TYPE_SPECIFICATION");
        }

        // Pastikan id yang diberikan adalah UUID v4
        if (id && !uuidValidate(id)) {
            throw new Error("REPLY_DETAIL.ID_NOT_VALID_UUID_V4");
        }

        // Cek apakah id sesuai dengan UUID v4
        if (id && uuidVersion(id) !== 4) {
            throw new Error("REPLY_DETAIL.ID_NOT_VALID_UUID_V4");
        }
    }
}

module.exports = ReplyDetail;
