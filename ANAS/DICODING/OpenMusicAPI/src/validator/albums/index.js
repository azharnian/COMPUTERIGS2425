const { AlbumPayloadSchema, ImageHeadersSchema } = require("./schema");
const MiscError = require("../../exceptions/MiscError");

const AlbumsValidator = {
    validateAlbumPayload: (payload) => {
        const validationResult = AlbumPayloadSchema.validate(payload);

        if (validationResult.error) {
            throw new MiscError(validationResult.error.message);
        }
    },

    validateCoverAlbumImageHeaders: (headers) => {
        const validationResult = ImageHeadersSchema.validate(headers);

        if (validationResult.error) {
            console.log(validationResult.error.message, "validationResult.error.message");
            throw new MiscError(validationResult.error.message);
        }
    },
};

module.exports = AlbumsValidator;