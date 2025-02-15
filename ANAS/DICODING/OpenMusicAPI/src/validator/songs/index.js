const { SongPayloadSchema, SongQuerySchema } = require("./schema");
const MiscError = require("../../exceptions/MiscError");

const SongsValidator = {
    validateSongPayload: (payload) => {
        const validationResult = SongPayloadSchema.validate(payload);

        if (validationResult.error) {
            throw new MiscError(validationResult.error.message);
        }
    },

    validateSongQuery: (payload) => {
        const validationResult = SongQuerySchema.validate(payload);

        if (validationResult.error) {
            throw new MiscError(validationResult.error.message);
        }
    },
};

module.exports = SongsValidator;