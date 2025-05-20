const { v4: uuidv4 } = require("uuid");
const UsersTableTestHelper = require("../../../../tests/UsersTableTestHelper");
const ThreadsTableTestHelper = require("../../../../tests/ThreadsTableTestHelper");
const CommentsTableTestHelper = require("../../../../tests/CommentsTableTestHelper");
const RepliesTableTestHelper = require("../../../../tests/RepliesTableTestHelper");
const NotFoundError = require("../../../Commons/exceptions/NotFoundError");
const AuthorizationError = require("../../../Commons/exceptions/AuthorizationError");
const NewReply = require("../../../Domains/replies/entities/NewReply");
const AddedReply = require("../../../Domains/replies/entities/AddedReply");
const pool = require("../../database/postgres/pool");
const ReplyRepositoryPostgres = require("../ReplyRepositoryPostgres");

describe("ReplyRepositoryPostgres", () => {
    afterEach(async () => {
        await RepliesTableTestHelper.cleanTable();
        await CommentsTableTestHelper.cleanTable();
        await ThreadsTableTestHelper.cleanTable();
        await UsersTableTestHelper.cleanTable();
    });

    afterAll(async () => {
        await pool.end();
    });

    describe("checkReplyAvailability function", () => {
        it("should throw NotFoundError when reply not available", async () => {
            // Arrange
            const replyRepositoryPostgres = new ReplyRepositoryPostgres(pool, {});

            // Action & Assert
            await expect(replyRepositoryPostgres.checkReplyAvailability(uuidv4()))
                .rejects.toThrowError(new NotFoundError("balasan tidak ditemukan"));
        });

        it("should throw NotFoundError when reply is deleted", async () => {
            // Arrange
            const userId = uuidv4();
            const threadId = uuidv4();
            const commentId = uuidv4();
            const replyId = uuidv4();

            await UsersTableTestHelper.addUser({ id: userId });
            await ThreadsTableTestHelper.addThread({ id: threadId, owner: userId });
            await CommentsTableTestHelper.addComment({
                id: commentId,
                thread: threadId,
                owner: userId,
            });
            await RepliesTableTestHelper.addReply({
                id: replyId,
                comment: commentId,
                owner: userId,
                isDelete: true, // reply is soft deleted
            });

            const replyRepositoryPostgres = new ReplyRepositoryPostgres(pool, {});

            // Action & Assert
            await expect(replyRepositoryPostgres.checkReplyAvailability(uuidv4(), commentId))
                .rejects.toThrowError(new NotFoundError("balasan tidak ditemukan"));
        });

        it("should throw NotFoundError when reply is npt found in comment", async () => {
            // Arrange
            const userId = uuidv4();
            const threadId = uuidv4();
            const commentId = uuidv4();
            const replyId = uuidv4();

            await UsersTableTestHelper.addUser({ id: userId });
            await ThreadsTableTestHelper.addThread({ id: threadId, owner: userId });
            await CommentsTableTestHelper.addComment({
                id: commentId,
                thread: threadId,
                owner: userId,
            });
            await RepliesTableTestHelper.addReply({
                id: replyId,
                comment: commentId,
                owner: userId,
            });

            const replyRepositoryPostgres = new ReplyRepositoryPostgres(pool, {});

            // Action & Assert
            await expect(replyRepositoryPostgres.checkReplyAvailability(uuidv4(), "other-comment"))
                .rejects.toThrowError(new NotFoundError("balasan tidak ditemukan"));
        });

        it("should not throw NotFoundError when reply available", async () => {
            // Arrange
            const userId = uuidv4();
            const threadId = uuidv4();
            const commentId = uuidv4();
            const replyId = uuidv4();

            await UsersTableTestHelper.addUser({ id: userId });
            await ThreadsTableTestHelper.addThread({ id: threadId, owner: userId });
            await CommentsTableTestHelper.addComment({
                id: commentId,
                thread: threadId,
                owner: userId,
            });
            await RepliesTableTestHelper.addReply({
                id: replyId,
                comment: commentId,
                owner: userId,
            });

            const replyRepositoryPostgres = new ReplyRepositoryPostgres(pool, {});

            // Action & Assert
            await expect(replyRepositoryPostgres.checkReplyAvailability(replyId, commentId))
                .resolves.not.toThrowError(NotFoundError);
        });
    });

    describe("verifyReplyOwner function", () => {
        it("should throw AuthorizationError when reply owner not authorized", async () => {
            // Arrange
            const userId = uuidv4();
            const threadId = uuidv4();
            const commentId = uuidv4();
            const replyId = uuidv4();

            await UsersTableTestHelper.addUser({ id: userId });
            await ThreadsTableTestHelper.addThread({ id: threadId, owner: userId });
            await CommentsTableTestHelper.addComment({
                id: commentId,
                thread: threadId,
                owner: userId,
            });
            await RepliesTableTestHelper.addReply({
                id: replyId,
                comment: commentId,
                owner: userId,
            });

            const replyRepositoryPostgres = new ReplyRepositoryPostgres(pool, {});

            // Action & Assert
            await expect(replyRepositoryPostgres.verifyReplyOwner(replyId, "user-other"))
                .rejects.toThrowError(AuthorizationError);
        });

        it("should not throw AuthorizationError when reply owner authorized", async () => {
            // Arrange
            const userId = uuidv4();
            const threadId = uuidv4();
            const commentId = uuidv4();
            const replyId = uuidv4();

            await UsersTableTestHelper.addUser({ id: userId });
            await ThreadsTableTestHelper.addThread({ id: threadId, owner: userId });
            await CommentsTableTestHelper.addComment({
                id: commentId,
                thread: threadId,
                owner: userId,
            });
            await RepliesTableTestHelper.addReply({
                id: replyId,
                comment: commentId,
                owner: userId,
            });

            const replyRepositoryPostgres = new ReplyRepositoryPostgres(pool, {});

            // Action & Assert
            await expect(replyRepositoryPostgres.verifyReplyOwner(replyId, userId))
                .resolves.not.toThrowError(AuthorizationError);
        });
    });
});