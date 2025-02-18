const MiscError = require("../../exceptions/MiscError");
const { PlaylistPayloadSchema, AddSongPayloadSchema } = require("./schema");

const PlaylistValidator = {
    validatePlaylistPayload: (payload) => {
        const validationResult = PlaylistPayloadSchema.validate(payload);
        if (validationResult.error) {
            throw new MiscError(validationResult.error.message);
        }
    },
    validateSongPayload: (payload) => {
        const validationResult = AddSongPayloadSchema.validate(payload);
        if (validationResult.error) {
            throw new MiscError(validationResult.error.message);
        }
    },
};

module.exports = PlaylistValidator;