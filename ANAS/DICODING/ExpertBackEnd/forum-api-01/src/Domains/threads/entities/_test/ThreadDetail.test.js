const { v4: uuidv4 } = require("uuid");
const ThreadDetail = require("../ThreadDetail");

describe("ThreadDetail entities", () => {
    it("should throw error when payload not contain needed property", () => {
        // Arrange
        const payload = {
            id: uuidv4(),
            title: "A thread",
            body: "A long thread",
            comments: [],
        };

        // Action & Assert
        expect(() => new ThreadDetail(payload)).toThrowError("THREAD_DETAIL.NOT_CONTAIN_NEEDED_PROPERTY");
    });

    it("should throw error when payload does not meet data type requirements", () => {
        // Arrange
        const payload = {
            id: uuidv4(),
            title: "A thread",
            body: "A long thread",
            date: "2023-09-22T07:19:09.775Z",
            username: 123, // invalid type
            comments: "some comments", // invalid type
        };

        // Action & Assert
        expect(() => new ThreadDetail(payload)).toThrowError("THREAD_DETAIL.NOT_MEET_DATA_TYPE_SPECIFICATION");
    });

    it("should create ThreadDetail entity correctly", () => {
        // Arrange
        const payload = {
            id: uuidv4(),
            title: "A thread",
            body: "A long thread",
            date: "2023-09-22T07:19:09.775Z",
            username: "dicoding",
            comments: [],
        };

        // Action
        const threadDetail = new ThreadDetail(payload);

        // Assert
        expect(threadDetail).toBeInstanceOf(ThreadDetail);
        expect(threadDetail).toStrictEqual(new ThreadDetail(payload));
    });
});
