const { v4: uuidv4 } = require("uuid");
const AddedThread = require("../AddedThread");

describe("AddedThread entities", () => {
    it("should throw error when payload not contain needed property", () => {
        // Arrange
        const payload = {
            id: uuidv4(),
            title: "A thread",
        };

        // Action & Assert
        expect(() => new AddedThread(payload)).toThrowError("ADDED_THREAD.NOT_CONTAIN_NEEDED_PROPERTY");
    });

    it("should throw error when payload does not meet data type requirements", () => {
        // Arrange
        const payload = {
            id: uuidv4(),
            title: "A thread",
            owner: 123,
        };

        // Action & Assert
        expect(() => new AddedThread(payload)).toThrowError("ADDED_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION");
    });

    it("should throw error when id is not a valid UUID v4", () => {
        // Arrange
        const payload = {
            id: "not-a-uuid",
            title: "A thread",
            owner: "user-123",
        };

        // Action & Assert
        expect(() => new AddedThread(payload)).toThrowError("ADDED_THREAD.ID_NOT_VALID_UUID_V4");
    });

    it("should create AddedThread entity correctly when id is provided", () => {
        // Arrange
        const payload = {
            id: uuidv4(),
            title: "A thread",
            owner: "user-123",
        };

        // Action
        const addedThread = new AddedThread(payload);

        // Assert
        expect(addedThread).toBeInstanceOf(AddedThread);
        expect(addedThread.id).toEqual(payload.id);
        expect(addedThread.title).toEqual(payload.title);
        expect(addedThread.owner).toEqual(payload.owner);
    });

    it("should create AddedThread entity and generate id when not provided", () => {
        // Arrange
        const payload = {
            title: "A thread",
            owner: "user-123",
        };

        // Action
        const addedThread = new AddedThread(payload);

        // Assert
        expect(addedThread).toBeInstanceOf(AddedThread);
        expect(typeof addedThread.id).toBe("string");
        expect(addedThread.id).toHaveLength(36); // UUID v4 length
        expect(addedThread.title).toEqual(payload.title);
        expect(addedThread.owner).toEqual(payload.owner);
    });
});
