const Like = require("../Like");
const { v4: uuidv4 } = require("uuid");

describe("Like entity", () => {
    it("should throw error when payload not contain needed property", () => {
    // Arrange
        const payload = {
            commentId: uuidv4(), // commentId valid
        };

        // Action & Assert
        expect(() => new Like(payload)).toThrowError("LIKE.NOT_CONTAIN_NEEDED_PROPERTY");
    });

    it("should throw error when payload does not meet data type requirements", () => {
    // Arrange
        const payload = {
            commentId: uuidv4(), // commentId valid
            owner: true, // owner harus berupa uuid
        };

        // Action & Assert
        expect(() => new Like(payload)).toThrowError("LIKE.NOT_MEET_DATA_TYPE_SPECIFICATION");
    });

    it("should create Like entities correctly", () => {
    // Arrange
        const payload = {
            commentId: uuidv4(), // commentId valid
            owner: uuidv4(),
        };

        // Action
        const newLike = new Like(payload);

        // Assert
        expect(newLike.commentId).toEqual(payload.commentId);
        expect(newLike.owner).toEqual(payload.owner);
    });
});
