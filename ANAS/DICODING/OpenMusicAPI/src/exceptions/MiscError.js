const ClientError = require("./ClientError");

class MiscError extends ClientError {
    constructor(message) {
        super(message);
        this.name = "MiscError";
    }
}

module.exports = MiscError;