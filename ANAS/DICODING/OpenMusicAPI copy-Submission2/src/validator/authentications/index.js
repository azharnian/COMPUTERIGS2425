const MiscError = require("../../exceptions/MiscError");
const {
    PostAuthenticationPayloadSchema,
    PutAuthenticationPayloadSchema,
    DeleteAuthenticationPayloadSchema,
} = require("./schema");

const AuthenticationsValidator = {
    validatePostAuthenticationPayload: (payload) => {
        const validationResult =
            PostAuthenticationPayloadSchema.validate(payload);
        if (validationResult.error) {
            throw new MiscError(validationResult.error.message);
        }
    },
    validatePutAuthenticationPayload: (payload) => {
        const validationResult =
            PutAuthenticationPayloadSchema.validate(payload);
        if (validationResult.error) {
            throw new MiscError(validationResult.error.message);
        }
    },
    validateDeleteAuthenticationPayload: (payload) => {
        const validationResult =
            DeleteAuthenticationPayloadSchema.validate(payload);
        if (validationResult.error) {
            throw new MiscError(validationResult.error.message);
        }
    },
};

module.exports = AuthenticationsValidator;