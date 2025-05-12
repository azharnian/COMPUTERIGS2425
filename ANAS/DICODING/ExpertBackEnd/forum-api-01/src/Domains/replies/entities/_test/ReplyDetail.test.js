const ReplyDetail = require("../ReplyDetail");
const { v4: uuidv4 } = require("uuid");

describe("ReplyDetail entities", () => {
    it("should throw error when payload does not meet data type requirements", () => {
        // Arrange
        const payload = {
            id: uuidv4(),
            username: "foobar",
            content: "a reply",
            date: 321,  // Invalid type (should be a string or Date object)
        };

        // Action & Assert
        expect(() => new ReplyDetail(payload)).toThrowError("REPLY_DETAIL.NOT_MEET_DATA_TYPE_SPECIFICATION");
    });

    it("should throw error when id is not a valid UUID v4", () => {
        // Arrange
        const payload = {
            id: "invalid-id",  // Invalid UUID format
            username: "foobar",
            content: "a reply",
            date: "2023-09-22T07:19:09.775Z",
        };

        // Action & Assert
        expect(() => new ReplyDetail(payload)).toThrowError("REPLY_DETAIL.ID_NOT_VALID_UUID_V4");
    });

    it("should create ReplyDetail entities correctly with a valid UUID", () => {
        // Arrange
        const payload = {
            id: uuidv4(),  // Valid UUID v4
            username: "foobar",
            content: "a reply",
            date: "2023-09-22T07:19:09.775Z",
        };

        // Action
        const replyDetail = new ReplyDetail(payload);

        // Assert
        expect(replyDetail).toBeInstanceOf(ReplyDetail);
        expect(replyDetail.id).toEqual(payload.id);
        expect(replyDetail.username).toEqual(payload.username);
        expect(replyDetail.content).toEqual(payload.content);
        expect(replyDetail.date).toEqual(payload.date);
    });

    it("should create ReplyDetail entities correctly without providing id (auto-generated)", () => {
        // Arrange
        const payload = {
            username: "foobar",
            content: "a reply",
            date: "2023-09-22T07:19:09.775Z",
        };

        // Action
        const replyDetail = new ReplyDetail(payload);

        // Assert
        expect(replyDetail).toBeInstanceOf(ReplyDetail);
        expect(replyDetail.id).toHaveLength(36);  // UUID v4 should have length 36
        expect(replyDetail.username).toEqual(payload.username);
        expect(replyDetail.content).toEqual(payload.content);
        expect(replyDetail.date).toEqual(payload.date);
    });

    it("should create deleted ReplyDetail entities correctly", () => {
        // Arrange
        const payload = {
            id: uuidv4(),
            username: "foobar",
            content: "a reply",
            date: "2023-09-22T07:19:09.775Z",
            is_delete: true,
        };

        // Action
        const replyDetail = new ReplyDetail(payload);

        // Assert
        expect(replyDetail).toBeInstanceOf(ReplyDetail);
        expect(replyDetail.id).toEqual(payload.id);
        expect(replyDetail.username).toEqual(payload.username);
        expect(replyDetail.content).toEqual("**balasan telah dihapus**");
        expect(replyDetail.date).toEqual(payload.date);
    });
});
