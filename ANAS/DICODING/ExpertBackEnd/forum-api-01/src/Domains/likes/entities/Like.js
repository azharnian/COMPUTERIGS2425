const { validate: uuidValidate } = require("uuid");

class Like {
    constructor(payload) {
        this._verifyPayload(payload);

        const { commentId, owner } = payload;

        this.commentId = commentId;
        this.owner = owner;
    }

    _verifyPayload({ commentId, owner }) {
        if (!commentId || !owner) {
            throw new Error("LIKE.NOT_CONTAIN_NEEDED_PROPERTY");
        }

        if (typeof commentId !== "string" || typeof owner !== "string") {
            throw new Error("LIKE.NOT_MEET_DATA_TYPE_SPECIFICATION");
        }

        // Pastikan commentId adalah UUID yang valid
        if (!uuidValidate(commentId)) {
            throw new Error("LIKE.COMMENT_ID_NOT_VALID_UUID_V4");
        }
    }
}

module.exports = Like;
