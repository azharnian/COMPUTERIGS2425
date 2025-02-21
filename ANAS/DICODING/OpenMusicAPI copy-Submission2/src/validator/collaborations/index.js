const { CollaborationPayloadaSchema } = require("./schema");
const MiscError = require("../../exceptions/MiscError");

const CollaborationsValidator = {
    validateCollaborationPayload: (payload) => {
        const validateResult = CollaborationPayloadaSchema.validate(payload);
        if (validateResult.error) {
            throw new MiscError(validateResult.error.message);
        }
    },
};

module.exports = CollaborationsValidator;