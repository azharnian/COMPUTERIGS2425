const { v4: uuidv4 } = require("uuid");
const LikeOrDislikeCommentUseCase = require("../LikeOrDislikeCommentUseCase");
const CommentLikeRepository = require("../../../Domains/likes/CommentLikeRepository");
const CommentRepository = require("../../../Domains/comments/CommentRepository");
const ThreadRepository = require("../../../Domains/threads/ThreadRepository");
const Like = require("../../../Domains/likes/entities/Like");

describe("LikeOrDislikeCommentUseCase", () => {
    it("should orchestrating the like comment action correctly if comment is not liked", async () => {
        // Arrange
        const commentId = uuidv4();
        const threadId = uuidv4();
        const owner = uuidv4();

        const like = new Like({
            commentId,
            owner,
        });

        /** creating dependency of use case */
        const mockThreadRepository = new ThreadRepository();
        const mockCommentRepository = new CommentRepository();
        const mockCommentLikeRepository = new CommentLikeRepository();

        /** mocking needed function */
        mockThreadRepository.checkThreadAvailability = jest.fn(() => Promise.resolve());
        mockCommentRepository.checkCommentAvailability = jest.fn(() => Promise.resolve());
        mockCommentLikeRepository.verifyUserCommentLike = jest.fn(() => Promise.resolve(false));
        mockCommentLikeRepository.addLike = jest.fn(() => Promise.resolve());

        /** creating use case instance */
        const likeOrDislikeCommentUseCase = new LikeOrDislikeCommentUseCase({
            commentLikeRepository: mockCommentLikeRepository,
            commentRepository: mockCommentRepository,
            threadRepository: mockThreadRepository,
        });

        // Action
        await likeOrDislikeCommentUseCase.execute(
            owner,
            {
                threadId,
                commentId,
            },
        );

        // Assert
        expect(mockThreadRepository.checkThreadAvailability).toBeCalledWith(threadId);
        expect(mockCommentRepository.checkCommentAvailability).toBeCalledWith(commentId, threadId);
        expect(mockCommentLikeRepository.verifyUserCommentLike).toBeCalledWith(like);
        expect(mockCommentLikeRepository.addLike).toBeCalledWith(like);
    });

    it("should orchestrating the dislike comment action correctly if comment is liked", async () => {
        // Arrange
        const commentId = uuidv4();
        const threadId = uuidv4();
        const owner = uuidv4();

        const like = new Like({
            commentId,
            owner,
        });

        /** creating dependency of use case */
        const mockThreadRepository = new ThreadRepository();
        const mockCommentRepository = new CommentRepository();
        const mockCommentLikeRepository = new CommentLikeRepository();

        /** mocking needed function */
        mockThreadRepository.checkThreadAvailability = jest.fn(() => Promise.resolve());
        mockCommentRepository.checkCommentAvailability = jest.fn(() => Promise.resolve());
        mockCommentLikeRepository.verifyUserCommentLike = jest.fn(() => Promise.resolve(true));
        mockCommentLikeRepository.deleteLike = jest.fn(() => Promise.resolve());

        /** creating use case instance */
        const likeOrDislikeCommentUseCase = new LikeOrDislikeCommentUseCase({
            commentLikeRepository: mockCommentLikeRepository,
            commentRepository: mockCommentRepository,
            threadRepository: mockThreadRepository,
        });

        // Action
        await likeOrDislikeCommentUseCase.execute(
            owner,
            {
                threadId,
                commentId,
            },
        );

        // Assert
        expect(mockThreadRepository.checkThreadAvailability).toBeCalledWith(threadId);
        expect(mockCommentRepository.checkCommentAvailability).toBeCalledWith(commentId, threadId);
        expect(mockCommentLikeRepository.verifyUserCommentLike).toBeCalledWith(like);
        expect(mockCommentLikeRepository.deleteLike).toBeCalledWith(like);
    });
});
