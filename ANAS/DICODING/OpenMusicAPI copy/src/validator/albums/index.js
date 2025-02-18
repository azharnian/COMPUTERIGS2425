const { AlbumPayloadSchema } = require("./schema");
const MiscError = require("../../exceptions/MiscError");

const AlbumsValidator = {
    validateAlbumPayload: (payload) => {
        const validationResult = AlbumPayloadSchema.validate(payload);

        if (validationResult.error) {
            throw new MiscError(validationResult.error.message);
        }
    },
};

module.exports = AlbumsValidator;