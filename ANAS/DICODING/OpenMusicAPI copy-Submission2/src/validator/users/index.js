const MiscError = require("../../exceptions/MiscError");
const { UserPayloadSchema } = require("./schema");

const UsersValidator = {
    validateUserPayload: (payload) => {
        const validationResult = UserPayloadSchema.validate(payload);

        if (validationResult.error) {
            throw new MiscError(validationResult.error.message);
        }
    },
};

module.exports = UsersValidator;