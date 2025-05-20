const { v4: uuidv4 } = require("uuid");
const DeleteReplyUseCase = require("../DeleteReplyUseCase");
const ReplyRepository = require("../../../Domains/replies/ReplyRepository");
const CommentRepository = require("../../../Domains/comments/CommentRepository");
const ThreadRepository = require("../../../Domains/threads/ThreadRepository");

describe("DeleteReplyUseCase", () => {
    it("should orchestrating the delete reply action correctly", async () => {
        // Arrange
        const threadId = uuidv4();
        const commentId = uuidv4();
        const replyId = uuidv4();
        const userId = uuidv4();

        const useCaseParams = {
            threadId,
            commentId,
            replyId,
        };

        /** creating dependency of use case */
        const mockThreadRepository = new ThreadRepository();
        const mockCommentRepository = new CommentRepository();
        const mockReplyRepository = new ReplyRepository();

        /** mocking needed function */
        mockThreadRepository.checkThreadAvailability = jest.fn(() => Promise.resolve());
        mockCommentRepository.checkCommentAvailability = jest.fn(() => Promise.resolve());
        mockReplyRepository.checkReplyAvailability = jest.fn(() => Promise.resolve());
        mockReplyRepository.verifyReplyOwner = jest.fn(() => Promise.resolve());
        mockReplyRepository.deleteReplyById = jest.fn(() => Promise.resolve());

        /** creating use case instance */
        const deleteReplyUseCase = new DeleteReplyUseCase({
            replyRepository: mockReplyRepository,
            commentRepository: mockCommentRepository,
            threadRepository: mockThreadRepository,
        });

        // Action
        await deleteReplyUseCase.execute(userId, useCaseParams);

        // Assert
        expect(mockThreadRepository.checkThreadAvailability).toHaveBeenCalledWith(threadId);
        expect(mockCommentRepository.checkCommentAvailability).toHaveBeenCalledWith(commentId, threadId);
        expect(mockReplyRepository.checkReplyAvailability).toHaveBeenCalledWith(replyId, commentId);
        expect(mockReplyRepository.verifyReplyOwner).toHaveBeenCalledWith(replyId, userId);
        expect(mockReplyRepository.deleteReplyById).toHaveBeenCalledWith(replyId);
    });
});
