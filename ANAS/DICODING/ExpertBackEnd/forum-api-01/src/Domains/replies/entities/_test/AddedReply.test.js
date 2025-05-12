const AddedReply = require("../AddedReply");
const { v4: uuidv4 } = require("uuid");

describe("AddedReply entities", () => {
    it("should throw error when payload does not meet data type requirements", () => {
        // Arrange
        const payload = {
            id: uuidv4(),
            content: "A reply",
            owner: 123,  // Invalid type (should be a string)
        };

        // Action & Assert
        expect(() => new AddedReply(payload)).toThrowError("ADDED_REPLY.NOT_MEET_DATA_TYPE_SPECIFICATION");
    });

    it("should throw error when id is not a valid UUID v4", () => {
        // Arrange
        const payload = {
            id: "invalid-id",  // Invalid UUID format
            content: "A reply",
            owner: "user-123",
        };

        // Action & Assert
        expect(() => new AddedReply(payload)).toThrowError("ADDED_REPLY.ID_NOT_VALID_UUID_V4");
    });

    it("should create AddedReply entities correctly with a valid UUID", () => {
        // Arrange
        const payload = {
            id: uuidv4(),  // Valid UUID v4
            content: "A reply",
            owner: "user-123",
        };

        // Action
        const addedReply = new AddedReply(payload);

        // Assert
        expect(addedReply).toBeInstanceOf(AddedReply);
        expect(addedReply.id).toEqual(payload.id);
        expect(addedReply.content).toEqual(payload.content);
        expect(addedReply.owner).toEqual(payload.owner);
    });

    it("should create AddedReply entities correctly without providing id (auto-generated)", () => {
        // Arrange
        const payload = {
            content: "A reply",
            owner: "user-123",
        };

        // Action
        const addedReply = new AddedReply(payload);

        // Assert
        expect(addedReply).toBeInstanceOf(AddedReply);
        expect(addedReply.id).toHaveLength(36);  // UUID v4 should have length 36
        expect(addedReply.content).toEqual(payload.content);
        expect(addedReply.owner).toEqual(payload.owner);
    });
});
