const Jwt = require("@hapi/jwt");
const MiscError = require("../exceptions/MiscError");

const TokenManager = {
    generateAccessToken(payload) {
        return Jwt.token.generate(payload, process.env.ACCESS_TOKEN_KEY);
    },

    generateRefreshToken(payload) {
        return Jwt.token.generate(payload, process.env.REFRESH_TOKEN_KEY);
    },

    verifyRefreshToken(refreshToken) {
        try {
            const artifacts = Jwt.token.decode(refreshToken);
            Jwt.token.verifySignature(artifacts, process.env.REFRESH_TOKEN_KEY);
            const { payload } = artifacts.decoded;
            return payload;
        } catch (error) {
            throw new MiscError(`Refresh token tidak valid ${error}`);
        }
    },
};

module.exports = TokenManager;