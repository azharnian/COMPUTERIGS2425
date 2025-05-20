const { v4: uuidv4 } = require("uuid");
const AddReplyUseCase = require("../AddReplyUseCase");
const NewReply = require("../../../Domains/replies/entities/NewReply");
const AddedReply = require("../../../Domains/replies/entities/AddedReply");
const ReplyRepository = require("../../../Domains/replies/ReplyRepository");
const CommentRepository = require("../../../Domains/comments/CommentRepository");
const ThreadRepository = require("../../../Domains/threads/ThreadRepository");

describe("AddReplyUseCase", () => {
    it("should orchestrating the add reply action correctly", async () => {
        // Arrange
        const userId = uuidv4();
        const threadId = uuidv4();
        const commentId = uuidv4();
        const replyId = uuidv4();

        const useCaseParams = {
            threadId,
            commentId,
        };
        const useCasePayload = { content: "A reply" };

        const mockAddedReply = new AddedReply({
            id: replyId,
            content: useCasePayload.content,
            owner: userId,
        });

        /** creating dependency of use case */
        const mockThreadRepository = new ThreadRepository();
        const mockCommentRepository = new CommentRepository();
        const mockReplyRepository = new ReplyRepository();

        /** mocking needed function */
        mockThreadRepository.checkThreadAvailability = jest.fn(() => Promise.resolve());
        mockCommentRepository.checkCommentAvailability = jest.fn(() => Promise.resolve());
        mockReplyRepository.addReply = jest.fn(() => Promise.resolve(mockAddedReply));

        /** creating use case instance */
        const addReplyUseCase = new AddReplyUseCase({
            replyRepository: mockReplyRepository,
            commentRepository: mockCommentRepository,
            threadRepository: mockThreadRepository,
        });

        // Action
        const addedReply = await addReplyUseCase.execute(userId, useCaseParams, useCasePayload);

        // Assert
        expect(addedReply).toStrictEqual(new AddedReply({
            id: replyId,
            content: "A reply",
            owner: userId,
        }));

        expect(mockThreadRepository.checkThreadAvailability).toBeCalledWith(threadId);
        expect(mockCommentRepository.checkCommentAvailability).toBeCalledWith(commentId, threadId);
        expect(mockReplyRepository.addReply).toBeCalledWith(
            userId,
            commentId,
            new NewReply({ content: useCasePayload.content }),
        );
    });
});
