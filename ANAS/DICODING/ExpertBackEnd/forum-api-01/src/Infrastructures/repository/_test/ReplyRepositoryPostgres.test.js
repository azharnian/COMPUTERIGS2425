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
            const replyRepositoryPostgres = new ReplyRepositoryPostgres(pool, {});
            await expect(replyRepositoryPostgres.checkReplyAvailability(uuidv4()))
                .rejects.toThrowError(new NotFoundError("balasan tidak ditemukan"));
        });

        it("should throw NotFoundError when reply is deleted", async () => {
            const userId = uuidv4();
            const threadId = uuidv4();
            const commentId = uuidv4();
            const replyId = uuidv4();

            await UsersTableTestHelper.addUser({ id: userId });
            await ThreadsTableTestHelper.addThread({ id: threadId, owner: userId });
            await CommentsTableTestHelper.addComment({ id: commentId, thread: threadId, owner: userId });
            await RepliesTableTestHelper.addReply({ id: replyId, comment: commentId, owner: userId, isDelete: true });

            const replyRepositoryPostgres = new ReplyRepositoryPostgres(pool, {});
            await expect(replyRepositoryPostgres.checkReplyAvailability(replyId, commentId))
                .rejects.toThrowError(new NotFoundError("balasan tidak valid"));
        });

        it("should throw NotFoundError when reply is not found in comment", async () => {
            const userId = uuidv4();
            const threadId = uuidv4();
            const commentId = uuidv4();
            const replyId = uuidv4();

            await UsersTableTestHelper.addUser({ id: userId });
            await ThreadsTableTestHelper.addThread({ id: threadId, owner: userId });
            await CommentsTableTestHelper.addComment({ id: commentId, thread: threadId, owner: userId });
            await RepliesTableTestHelper.addReply({ id: replyId, comment: commentId, owner: userId });

            const replyRepositoryPostgres = new ReplyRepositoryPostgres(pool, {});
            await expect(replyRepositoryPostgres.checkReplyAvailability(replyId, uuidv4()))
                .rejects.toThrowError(new NotFoundError("balasan dalam komentar tidak ditemukan"));
        });

        it("should not throw NotFoundError when reply available", async () => {
            const userId = uuidv4();
            const threadId = uuidv4();
            const commentId = uuidv4();
            const replyId = uuidv4();

            await UsersTableTestHelper.addUser({ id: userId });
            await ThreadsTableTestHelper.addThread({ id: threadId, owner: userId });
            await CommentsTableTestHelper.addComment({ id: commentId, thread: threadId, owner: userId });
            await RepliesTableTestHelper.addReply({ id: replyId, comment: commentId, owner: userId });

            const replyRepositoryPostgres = new ReplyRepositoryPostgres(pool, {});
            await expect(replyRepositoryPostgres.checkReplyAvailability(replyId, commentId))
                .resolves.not.toThrowError(NotFoundError);
        });
    });

    describe("verifyReplyOwner function", () => {
        it("should throw AuthorizationError when reply owner not authorized", async () => {
            const userId = uuidv4();
            const otherUserId = uuidv4();
            const threadId = uuidv4();
            const commentId = uuidv4();
            const replyId = uuidv4();

            await UsersTableTestHelper.addUser({ id: userId });
            await ThreadsTableTestHelper.addThread({ id: threadId, owner: userId });
            await CommentsTableTestHelper.addComment({ id: commentId, thread: threadId, owner: userId });
            await RepliesTableTestHelper.addReply({ id: replyId, comment: commentId, owner: userId });

            const replyRepositoryPostgres = new ReplyRepositoryPostgres(pool, {});
            await expect(replyRepositoryPostgres.verifyReplyOwner(replyId, otherUserId))
                .rejects.toThrowError(AuthorizationError);
        });

        it("should not throw AuthorizationError when reply owner authorized", async () => {
            const userId = uuidv4();
            const threadId = uuidv4();
            const commentId = uuidv4();
            const replyId = uuidv4();

            await UsersTableTestHelper.addUser({ id: userId });
            await ThreadsTableTestHelper.addThread({ id: threadId, owner: userId });
            await CommentsTableTestHelper.addComment({ id: commentId, thread: threadId, owner: userId });
            await RepliesTableTestHelper.addReply({ id: replyId, comment: commentId, owner: userId });

            const replyRepositoryPostgres = new ReplyRepositoryPostgres(pool, {});
            await expect(replyRepositoryPostgres.verifyReplyOwner(replyId, userId))
                .resolves.not.toThrowError(AuthorizationError);
        });
    });

    describe("addReply function", () => {
        let userId, threadId, commentId;
        beforeEach(async () => {
            userId = uuidv4();
            threadId = uuidv4();
            commentId = uuidv4();

            await UsersTableTestHelper.addUser({ id: userId });
            await ThreadsTableTestHelper.addThread({ id: threadId, owner: userId });
            await CommentsTableTestHelper.addComment({ id: commentId, thread: threadId, owner: userId });
        });

        it("should persist new reply", async () => {
            const newReply = new NewReply({ content: "A reply" });
            const fakeId = uuidv4();
            const fakeIdGenerator = () => fakeId;

            const replyRepositoryPostgres = new ReplyRepositoryPostgres(pool, fakeIdGenerator);
            await replyRepositoryPostgres.addReply(userId, commentId, newReply);

            const replys = await RepliesTableTestHelper.findRepliesById(`reply-${fakeId}`);
            expect(replys).toHaveLength(1);
        });

        it("should return added reply correctly", async () => {
            const newReply = new NewReply({ content: "A reply" });
            const fakeId = uuidv4();
            const fakeIdGenerator = () => fakeId;

            const replyRepositoryPostgres = new ReplyRepositoryPostgres(pool, fakeIdGenerator);
            const addedReply = await replyRepositoryPostgres.addReply(userId, commentId, newReply);

            expect(addedReply).toStrictEqual(new AddedReply({
                id: `reply-${fakeId}`,
                content: "A reply",
                owner: userId,
            }));
        });
    });

    // getRepliesByCommentId & getRepliesByThreadId -> bisa kamu lanjutkan dengan mengganti ID hardcoded jadi uuid juga seperti contoh di atas.
});
