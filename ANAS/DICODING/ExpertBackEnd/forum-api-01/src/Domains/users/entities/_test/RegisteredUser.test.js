const { v4: uuidv4 } = require("uuid");
const RegisteredUser = require("../RegisteredUser");

describe("a RegisteredUser entities", () => {
    it("should throw error when payload did not contain needed property", () => {
        // Arrange
        const payload = {
            username: "dicoding",
            fullname: "Dicoding Indonesia",
        };

        // Action and Assert
        expect(() => new RegisteredUser(payload)).toThrowError("REGISTERED_USER.NOT_CONTAIN_NEEDED_PROPERTY");
    });

    it("should throw error when payload did not meet data type specification", () => {
        // Arrange
        const payload = {
            id: 123, // invalid type
            username: "dicoding",
            fullname: {}, // invalid type
        };

        // Action and Assert
        expect(() => new RegisteredUser(payload)).toThrowError("REGISTERED_USER.NOT_MEET_DATA_TYPE_SPECIFICATION");
    });

    it("should throw error when id is not a valid UUID v4", () => {
        // Arrange
        const payload = {
            id: "not-a-uuid", // invalid UUID
            username: "dicoding",
            fullname: "Dicoding Indonesia",
        };

        // Action and Assert
        expect(() => new RegisteredUser(payload)).toThrowError("REGISTERED_USER.ID_NOT_VALID_UUID_V4");
    });

    it("should create registeredUser object correctly", () => {
        // Arrange
        const payload = {
            id: uuidv4(), // valid UUID
            username: "dicoding",
            fullname: "Dicoding Indonesia",
        };

        // Action
        const registeredUser = new RegisteredUser(payload);

        // Assert
        expect(registeredUser.id).toEqual(payload.id);
        expect(registeredUser.username).toEqual(payload.username);
        expect(registeredUser.fullname).toEqual(payload.fullname);
    });
});
