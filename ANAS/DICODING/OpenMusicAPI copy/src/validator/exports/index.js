const ExportNotesPayloadSchema = require("./schema");
const MiscError = require("../../exceptions/MiscError");

const ExportsValidator = {
    validateExportPlaylistPayload: (payload) => {
        const validationResult = ExportNotesPayloadSchema.validate(payload);

        if (validationResult.error) {
            throw new MiscError(validationResult.error.message);
        }
    },
};

module.exports = ExportsValidator;