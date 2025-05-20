const { v4: uuidv4 } = require("uuid");
const DeleteCommentUseCase = require("../DeleteCommentUseCase");
const CommentRepository = require("../../../Domains/comments/CommentRepository");
const ThreadRepository = require("../../../Domains/threads/ThreadRepository");

describe("DeleteCommentUseCase", () => {
    it("should orchestrating the delete comment action correctly", async () => {
        // Arrange
        const threadId = uuidv4();
        const commentId = uuidv4();
        const userId = uuidv4();

        const useCaseParams = {
            threadId,
            commentId,
        };

        /** creating dependency of use case */
        const mockThreadRepository = new ThreadRepository();
        const mockCommentRepository = new CommentRepository();

        /** mocking needed function */
        mockThreadRepository.checkThreadAvailability = jest.fn(() => Promise.resolve());
        mockCommentRepository.checkCommentAvailability = jest.fn(() => Promise.resolve());
        mockCommentRepository.verifyCommentOwner = jest.fn(() => Promise.resolve());
        mockCommentRepository.deleteCommentById = jest.fn(() => Promise.resolve());

        /** creating use case instance */
        const deleteCommentUseCase = new DeleteCommentUseCase({
            commentRepository: mockCommentRepository,
            threadRepository: mockThreadRepository,
        });

        // Action
        await deleteCommentUseCase.execute(userId, useCaseParams);

        // Assert
        expect(mockThreadRepository.checkThreadAvailability).toHaveBeenCalledWith(threadId);
        expect(mockCommentRepository.checkCommentAvailability).toHaveBeenCalledWith(commentId, threadId);
        expect(mockCommentRepository.verifyCommentOwner).toHaveBeenCalledWith(commentId, userId);
        expect(mockCommentRepository.deleteCommentById).toHaveBeenCalledWith(commentId);
    });
});
