const { v4: uuidv4 } = require("uuid");
const UserRepository = require("../../../Domains/users/UserRepository");
const AuthenticationRepository = require("../../../Domains/authentications/AuthenticationRepository");
const AuthenticationTokenManager = require("../../security/AuthenticationTokenManager");
const PasswordHash = require("../../security/PasswordHash");
const LoginUserUseCase = require("../LoginUserUseCase");
const NewAuth = require("../../../Domains/authentications/entities/NewAuth");

describe("GetAuthenticationUseCase", () => {
    it("should orchestrating the get authentication action correctly", async () => {
        // Arrange
        const useCasePayload = {
            username: "dicoding",
            password: "secret",
        };

        const userId = uuidv4();

        const mockedAuthentication = new NewAuth({
            accessToken: "access_token",
            refreshToken: "refresh_token",
        });

        const mockUserRepository = new UserRepository();
        const mockAuthenticationRepository = new AuthenticationRepository();
        const mockAuthenticationTokenManager = new AuthenticationTokenManager();
        const mockPasswordHash = new PasswordHash();

        // Mocking
        mockUserRepository.getPasswordByUsername = jest.fn(() => Promise.resolve("encrypted_password"));
        mockPasswordHash.comparePassword = jest.fn(() => Promise.resolve());
        mockAuthenticationTokenManager.createAccessToken = jest.fn(() => Promise.resolve(
            mockedAuthentication.accessToken,
        ));
        mockAuthenticationTokenManager.createRefreshToken = jest.fn(() => Promise.resolve(
            mockedAuthentication.refreshToken,
        ));
        mockUserRepository.getIdByUsername = jest.fn(() => Promise.resolve(userId));
        mockAuthenticationRepository.addToken = jest.fn(() => Promise.resolve());

        // create use case instance
        const loginUserUseCase = new LoginUserUseCase({
            userRepository: mockUserRepository,
            authenticationRepository: mockAuthenticationRepository,
            authenticationTokenManager: mockAuthenticationTokenManager,
            passwordHash: mockPasswordHash,
        });

        // Action
        const actualAuthentication = await loginUserUseCase.execute(useCasePayload);

        // Assert
        expect(actualAuthentication).toEqual(new NewAuth({
            accessToken: "access_token",
            refreshToken: "refresh_token",
        }));
        expect(mockUserRepository.getPasswordByUsername)
            .toBeCalledWith("dicoding");
        expect(mockPasswordHash.comparePassword)
            .toBeCalledWith("secret", "encrypted_password");
        expect(mockUserRepository.getIdByUsername)
            .toBeCalledWith("dicoding");
        expect(mockAuthenticationTokenManager.createAccessToken)
            .toBeCalledWith({ username: "dicoding", id: userId });
        expect(mockAuthenticationTokenManager.createRefreshToken)
            .toBeCalledWith({ username: "dicoding", id: userId });
        expect(mockAuthenticationRepository.addToken)
            .toBeCalledWith(mockedAuthentication.refreshToken);
    });
});
