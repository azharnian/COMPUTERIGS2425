const { v4: uuidv4, validate: uuidValidate } = require("uuid");
const AddedComment = require("../AddedComment");

describe("AddedComment entities", () => {
    it("should throw error when payload not contain needed property", () => {
        // Arrange
        const payload = {
            content: "A comment",
            owner: uuidv4(),  // owner harus berupa UUID
        };

        // Action & Assert
        expect(() => new AddedComment(payload)).toThrowError("ADDED_COMMENT.NOT_CONTAIN_NEEDED_PROPERTY");
    });

    it("should throw error when payload does not meet data type requirements", () => {
        // Arrange
        const payload = {
            id: uuidv4(),
            content: "A comment",
            owner: "user-123",  // owner harus UUID v4
        };

        // Action & Assert
        expect(() => new AddedComment(payload)).toThrowError("ADDED_COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION");
    });

    it("should throw error when id is not valid UUID v4", () => {
        // Arrange
        const payload = {
            id: "invalid-uuid",
            content: "A comment",
            owner: uuidv4(),
        };

        // Action & Assert
        expect(() => new AddedComment(payload)).toThrowError("ADDED_COMMENT.ID_NOT_VALID_UUID_V4");
    });

    it("should throw error when owner is not valid UUID v4", () => {
        // Arrange
        const payload = {
            id: uuidv4(),
            content: "A comment",
            owner: "invalid-owner-id",  // owner harus UUID v4 yang valid
        };

        // Action & Assert
        expect(() => new AddedComment(payload)).toThrowError("ADDED_COMMENT.OWNER_NOT_VALID_UUID_V4");
    });

    it("should create AddedComment entities correctly with a valid UUID", () => {
        // Arrange
        const payload = {
            id: uuidv4(),
            content: "A comment",
            owner: uuidv4(),  // owner harus UUID v4 yang valid
        };

        // Action
        const addedComment = new AddedComment(payload);

        // Assert
        expect(addedComment).toBeInstanceOf(AddedComment);
        expect(addedComment.id).toEqual(payload.id);
        expect(addedComment.content).toEqual(payload.content);
        expect(addedComment.owner).toEqual(payload.owner);
    });

    it("should create AddedComment entities correctly with auto-generated UUID", () => {
        // Arrange
        const payload = {
            content: "A comment",
            owner: uuidv4(),  // owner harus UUID v4 yang valid
        };

        // Action
        const addedComment = new AddedComment(payload);

        // Assert
        expect(addedComment).toBeInstanceOf(AddedComment);
        expect(uuidValidate(addedComment.id)).toBeTruthy();  // Check if id is a valid UUID
        expect(addedComment.content).toEqual(payload.content);
        expect(addedComment.owner).toEqual(payload.owner);
    });
});
