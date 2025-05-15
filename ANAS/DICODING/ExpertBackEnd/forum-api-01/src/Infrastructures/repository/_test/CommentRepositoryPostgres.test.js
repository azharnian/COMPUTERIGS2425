const { v4: uuidv4 } = require("uuid");
const UsersTableTestHelper = require("../../../../tests/UsersTableTestHelper");
const ThreadsTableTestHelper = require("../../../../tests/ThreadsTableTestHelper");
const CommentsTableTestHelper = require("../../../../tests/CommentsTableTestHelper");
const NotFoundError = require("../../../Commons/exceptions/NotFoundError");
const AuthorizationError = require("../../../Commons/exceptions/AuthorizationError");
const NewComment = require("../../../Domains/comments/entities/NewComment");
const AddedComment = require("../../../Domains/comments/entities/AddedComment");
const pool = require("../../database/postgres/pool");
const CommentRepositoryPostgres = require("../CommentRepositoryPostgres");

describe("CommentRepositoryPostgres", () => {
    const userId = uuidv4();
    const otherUserId = uuidv4();
    const threadId = uuidv4();
    const commentId = uuidv4();
    const otherThreadId = uuidv4();

    afterEach(async () => {
        await CommentsTableTestHelper.cleanTable();
        await ThreadsTableTestHelper.cleanTable();
        await UsersTableTestHelper.cleanTable();
    });

    afterAll(async () => {
        await pool.end();
    });

    describe("checkCommentAvailability function", () => {
        it("should throw NotFoundError when comment not available", async () => {
            const repo = new CommentRepositoryPostgres(pool, {});
            await expect(repo.checkCommentAvailability(commentId, threadId))
                .rejects.toThrowError(new NotFoundError("komentar tidak ditemukan"));
        });

        it("should throw NotFoundError when comment is deleted", async () => {
            await UsersTableTestHelper.addUser({ id: userId });
            await ThreadsTableTestHelper.addThread({ id: threadId, owner: userId });
            await CommentsTableTestHelper.addComment({
                id: commentId,
                thread: threadId,
                owner: userId,
                isDelete: true,
            });

            const repo = new CommentRepositoryPostgres(pool, {});
            await expect(repo.checkCommentAvailability(commentId, threadId))
                .rejects.toThrowError(new NotFoundError("komentar tidak valid"));
        });

        it("should throw NotFoundError when comment is not found in thread", async () => {
            await UsersTableTestHelper.addUser({ id: userId });
            await ThreadsTableTestHelper.addThread({ id: threadId, owner: userId });
            await CommentsTableTestHelper.addComment({
                id: commentId,
                thread: threadId,
                owner: userId,
            });

            const repo = new CommentRepositoryPostgres(pool, {});
            await expect(repo.checkCommentAvailability(commentId, otherThreadId))
                .rejects.toThrowError(new NotFoundError("komentar dalam thread tidak ditemukan"));
        });

        it("should not throw NotFoundError when comment available", async () => {
            await UsersTableTestHelper.addUser({ id: userId });
            await ThreadsTableTestHelper.addThread({ id: threadId, owner: userId });
            await CommentsTableTestHelper.addComment({
                id: commentId,
                thread: threadId,
                owner: userId,
            });

            const repo = new CommentRepositoryPostgres(pool, {});
            await expect(repo.checkCommentAvailability(commentId, threadId))
                .resolves.not.toThrowError(NotFoundError);
        });
    });

    describe("verifyCommentOwner function", () => {
        it("should throw AuthorizationError when comment owner not authorized", async () => {
            await UsersTableTestHelper.addUser({ id: userId });
            await ThreadsTableTestHelper.addThread({ id: threadId, owner: userId });
            await CommentsTableTestHelper.addComment({ id: commentId, thread: threadId, owner: userId });

            const repo = new CommentRepositoryPostgres(pool, {});
            await expect(repo.verifyCommentOwner(commentId, otherUserId))
                .rejects.toThrowError(AuthorizationError);
        });

        it("should not throw AuthorizationError when comment owner authorized", async () => {
            await UsersTableTestHelper.addUser({ id: userId });
            await ThreadsTableTestHelper.addThread({ id: threadId, owner: userId });
            await CommentsTableTestHelper.addComment({ id: commentId, thread: threadId, owner: userId });

            const repo = new CommentRepositoryPostgres(pool, {});
            await expect(repo.verifyCommentOwner(commentId, userId))
                .resolves.not.toThrowError(AuthorizationError);
        });
    });

    describe("addComment function", () => {
        beforeEach(async () => {
            await UsersTableTestHelper.addUser({ id: userId });
            await ThreadsTableTestHelper.addThread({ id: threadId, owner: userId });
        });

        it("should persist new comment", async () => {
            const newComment = new NewComment({ content: "A comment" });

            const commentUuid = uuidv4();
            const repo = new CommentRepositoryPostgres(pool, () => commentUuid);

            await repo.addComment(userId, threadId, newComment);

            const comments = await CommentsTableTestHelper.findCommentsById(commentUuid);
            expect(comments).toHaveLength(1);
        });

        it("should return added comment correctly", async () => {
            const newComment = new NewComment({ content: "A comment" });
            const commentUuid = uuidv4();

            const repo = new CommentRepositoryPostgres(pool, () => commentUuid);
            const addedComment = await repo.addComment(userId, threadId, newComment);

            expect(addedComment).toStrictEqual(new AddedComment({
                id: commentUuid,
                content: "A comment",
                owner: userId,
            }));
        });
    });

    describe("getCommentsByThreadId function", () => {
        it("should return thread comments correctly", async () => {
            await UsersTableTestHelper.addUser({ id: userId, username: "foobar" });
            await UsersTableTestHelper.addUser({ id: otherUserId, username: "johndoe" });
            await ThreadsTableTestHelper.addThread({ id: threadId, owner: userId });

            const commentNewId = uuidv4();
            const commentOldId = uuidv4();

            await CommentsTableTestHelper.addComment({
                id: commentNewId,
                content: "A new comment",
                date: "2023-09-10",
                thread: threadId,
                owner: userId,
            });
            await CommentsTableTestHelper.addComment({
                id: commentOldId,
                content: "An old comment",
                date: "2023-09-09",
                thread: threadId,
                owner: otherUserId,
            });

            const repo = new CommentRepositoryPostgres(pool, {});
            const comments = await repo.getCommentsByThreadId(threadId);

            expect(comments).toHaveLength(2);
            expect(comments[0].id).toBe(commentOldId);
            expect(comments[1].id).toBe(commentNewId);
            expect(comments[0].username).toBe("johndoe");
            expect(comments[1].username).toBe("foobar");
        });
    });

    describe("deleteCommentById function", () => {
        it("should soft delete comment and update is_delete field", async () => {
            await UsersTableTestHelper.addUser({ id: userId });
            await ThreadsTableTestHelper.addThread({ id: threadId, owner: userId });

            const commentUuid = uuidv4();
            await CommentsTableTestHelper.addComment({ id: commentUuid, thread: threadId, owner: userId });

            const repo = new CommentRepositoryPostgres(pool, {});
            await repo.deleteCommentById(commentUuid);

            const comments = await CommentsTableTestHelper.findCommentsById(commentUuid);
            expect(comments).toHaveLength(1);
            expect(comments[0].is_delete).toBeTruthy();
        });
    });
});
