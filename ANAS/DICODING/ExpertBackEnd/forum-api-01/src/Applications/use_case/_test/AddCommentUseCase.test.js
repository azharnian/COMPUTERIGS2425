const { v4: uuidv4 } = require("uuid");
const AddCommentUseCase = require("../AddCommentUseCase");
const NewComment = require("../../../Domains/comments/entities/NewComment");
const AddedComment = require("../../../Domains/comments/entities/AddedComment");
const CommentRepository = require("../../../Domains/comments/CommentRepository");
const ThreadRepository = require("../../../Domains/threads/ThreadRepository");

describe("AddCommentUseCase", () => {
    it("should orchestrating the add comment action correctly", async () => {
        // Arrange
        const userId = uuidv4();
        const threadId = uuidv4();
        const commentId = uuidv4();
        const useCasePayload = { content: "A comment" };

        const mockAddedComment = new AddedComment({
            id: commentId,
            content: "A comment",
            owner: userId,
        });

        /** creating dependency of use case */
        const mockThreadRepository = new ThreadRepository();
        const mockCommentRepository = new CommentRepository();

        /** mocking needed function */
        mockThreadRepository.checkThreadAvailability = jest.fn(() => Promise.resolve());
        mockCommentRepository.addComment = jest.fn(() => Promise.resolve(mockAddedComment));

        /** creating use case instance */
        const addCommentUseCase = new AddCommentUseCase({
            commentRepository: mockCommentRepository,
            threadRepository: mockThreadRepository,
        });

        // Action
        const addedComment = await addCommentUseCase.execute(userId, threadId, useCasePayload);

        // Assert
        expect(addedComment).toStrictEqual(new AddedComment({
            id: commentId,
            content: "A comment",
            owner: userId,
        }));

        expect(mockThreadRepository.checkThreadAvailability).toBeCalledWith(threadId);
        expect(mockCommentRepository.addComment).toBeCalledWith(
            userId,
            threadId,
            new NewComment({ content: useCasePayload.content }),
        );
    });
});
