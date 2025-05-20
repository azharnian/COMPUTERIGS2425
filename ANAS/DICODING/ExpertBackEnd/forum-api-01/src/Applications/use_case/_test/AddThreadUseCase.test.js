const { v4: uuidv4 } = require("uuid");
const AddThreadUseCase = require("../AddThreadUseCase");
const NewThread = require("../../../Domains/threads/entities/NewThread");
const AddedThread = require("../../../Domains/threads/entities/AddedThread");
const ThreadRepository = require("../../../Domains/threads/ThreadRepository");

describe("AddThreadUseCase", () => {
    it("should orchestrating the add thread action correctly", async () => {
        // Arrange
        const userId = uuidv4();
        const threadId = uuidv4();

        const useCasePayload = {
            title: "A thread",
            body: "A long thread",
        };

        const mockAddedThread = new AddedThread({
            id: threadId,
            title: useCasePayload.title,
            owner: userId,
        });

        /** creating dependency of use case */
        const mockThreadRepository = new ThreadRepository();

        /** mocking needed function */
        mockThreadRepository.addThread = jest.fn(() => Promise.resolve(mockAddedThread));

        /** creating use case instance */
        const addThreadUseCase = new AddThreadUseCase({
            threadRepository: mockThreadRepository,
        });

        // Action
        const addedThread = await addThreadUseCase.execute(userId, useCasePayload);

        // Assert
        expect(addedThread).toStrictEqual(new AddedThread({
            id: threadId,
            title: "A thread",
            owner: userId,
        }));

        expect(mockThreadRepository.addThread).toBeCalledWith(
            userId,
            new NewThread({
                title: useCasePayload.title,
                body: useCasePayload.body,
            })
        );
    });
});
