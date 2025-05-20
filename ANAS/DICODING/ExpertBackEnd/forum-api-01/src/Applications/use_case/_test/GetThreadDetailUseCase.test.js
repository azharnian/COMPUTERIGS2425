const { v4: uuidv4 } = require("uuid"); // import uuid v4
const GetThreadDetailUseCase = require("../GetThreadDetailUseCase");
const ThreadDetail = require("../../../Domains/threads/entities/ThreadDetail");
const ThreadRepository = require("../../../Domains/threads/ThreadRepository");
const CommentRepository = require("../../../Domains/comments/CommentRepository");
const ReplyRepository = require("../../../Domains/replies/ReplyRepository");
const CommentLikeRepository = require("../../../Domains/likes/CommentLikeRepository");
const CommentDetail = require("../../../Domains/comments/entities/CommentDetail");
const ReplyDetail = require("../../../Domains/replies/entities/ReplyDetail");

describe("GetThreadDetailUseCase", () => {
    it("should orchestrating the get thread detail action correctly", async () => {
        // Generate UUIDs for all IDs needed
        const threadId = uuidv4();
        const commentId1 = uuidv4();
        const commentId2 = uuidv4();
        const replyId1 = uuidv4();
        const replyId2 = uuidv4();
        const replyId3 = uuidv4();
        const likeId1 = uuidv4();
        const likeId2 = uuidv4();
        const likeId3 = uuidv4();
        const likeId4 = uuidv4();
        const likeId5 = uuidv4();

        // Arrange
        const mockThreadDetail = {
            id: threadId,
            title: "A thread",
            body: "A long thread",
            date: "2023-09-07T00:00:00.000Z",
            username: "foobar",
        };

        const mockComments = [
            {
                id: commentId1,
                username: "johndoe",
                date: "2023-09-07T00:00:00.000Z",
                content: "a comment",
                is_delete: false,
            },
            {
                id: commentId2,
                username: "foobar",
                date: "2023-09-08T00:00:00.000Z",
                content: "a deleted comment",
                is_delete: true,
            },
        ];

        const mockReplies = [
            {
                id: replyId1,
                username: "johndoe",
                date: "2023-09-08T00:00:00.000Z",
                content: "a reply",
                comment: commentId1,
                is_delete: false,
            },
            {
                id: replyId2,
                username: "foobar",
                date: "2023-09-09T00:00:00.000Z",
                content: "a deleted reply",
                comment: commentId1,
                is_delete: true,
            },
            {
                id: replyId3,
                username: "foobar",
                date: "2023-09-09T00:00:00.000Z",
                content: "a reply",
                comment: commentId2,
                is_delete: false,
            },
        ];

        const mockCommentsLikes = [
            {
                id: likeId1,
                comment: commentId1,
                owner: "johndoe",
            },
            {
                id: likeId2,
                comment: commentId1,
                owner: "foobar",
            },
            {
                id: likeId3,
                comment: commentId2,
                owner: "johndoe",
            },
            {
                id: likeId4,
                comment: commentId2,
                owner: "johndoe",
            },
            {
                id: likeId5,
                comment: commentId2,
                owner: "johndoe",
            },
        ];

        /** creating dependency of use case */
        const mockThreadRepository = new ThreadRepository();
        const mockCommentRepository = new CommentRepository();
        const mockReplyRepository = new ReplyRepository();
        const mockCommentLikeRepository = new CommentLikeRepository();

        /** mocking needed function */
        mockThreadRepository.getThreadById = jest.fn(() => Promise.resolve(mockThreadDetail));
        mockCommentRepository.getCommentsByThreadId = jest.fn(() => Promise.resolve(mockComments));
        mockReplyRepository.getRepliesByThreadId = jest.fn(() => Promise.resolve(mockReplies));
        mockCommentLikeRepository.getLikesByThreadId = jest.fn(() => Promise.resolve(mockCommentsLikes));

        /** creating use case instance */
        const getThreadDetailUseCase = new GetThreadDetailUseCase({
            threadRepository: mockThreadRepository,
            commentRepository: mockCommentRepository,
            replyRepository: mockReplyRepository,
            commentLikeRepository: mockCommentLikeRepository,
        });

        // Action
        const threadDetail = await getThreadDetailUseCase.execute(threadId);

        // Assert
        expect(threadDetail).toStrictEqual(new ThreadDetail({
            id: threadId,
            title: "A thread",
            body: "A long thread",
            date: "2023-09-07T00:00:00.000Z",
            username: "foobar",
            comments: [
                new CommentDetail({
                    id: commentId1,
                    username: "johndoe",
                    date: "2023-09-07T00:00:00.000Z",
                    content: "a comment",
                    replies: [
                        new ReplyDetail({
                            id: replyId1,
                            username: "johndoe",
                            content: "a reply",
                            date: "2023-09-08T00:00:00.000Z",
                        }),
                        new ReplyDetail({
                            id: replyId2,
                            username: "foobar",
                            date: "2023-09-09T00:00:00.000Z",
                            content: "**balasan telah dihapus**",
                        }),
                    ],
                    likeCount: 2,
                }),
                new CommentDetail({
                    id: commentId2,
                    username: "foobar",
                    date: "2023-09-08T00:00:00.000Z",
                    content: "**komentar telah dihapus**",
                    replies: [],
                    likeCount: 3,
                }),
            ],
        }));

        expect(mockThreadRepository.getThreadById).toBeCalledWith(threadId);
        expect(mockCommentRepository.getCommentsByThreadId).toBeCalledWith(threadId);
        expect(mockReplyRepository.getRepliesByThreadId).toBeCalledTimes(1);
        expect(mockReplyRepository.getRepliesByThreadId).toBeCalledWith(threadId);
        expect(mockCommentLikeRepository.getLikesByThreadId).toBeCalledTimes(1);
        expect(mockCommentLikeRepository.getLikesByThreadId).toBeCalledWith(threadId);
    });
});
