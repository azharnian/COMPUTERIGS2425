const { v4: uuidv4 } = require("uuid");
const UsersTableTestHelper = require("../../../../tests/UsersTableTestHelper");
const ThreadsTableTestHelper = require("../../../../tests/ThreadsTableTestHelper");
const CommentsTableTestHelper = require("../../../../tests/CommentsTableTestHelper");
const CommentLikesTableTestHelper = require("../../../../tests/CommentLikesTableTestHelper");
const pool = require("../../database/postgres/pool");
const CommentLikeRepositoryPostgres = require("../CommentLikeRepositoryPostgres");
const Like = require("../../../Domains/likes/entities/Like");

describe("CommentLikeRepositoryPostgres", () => {
    afterEach(async () => {
        await CommentLikesTableTestHelper.cleanTable();
        await CommentsTableTestHelper.cleanTable();
        await ThreadsTableTestHelper.cleanTable();
        await UsersTableTestHelper.cleanTable();
    });

    afterAll(async () => {
        await pool.end();
    });

    const dummyUserId = uuidv4();
    const dummyThreadId = uuidv4();
    const dummyCommentId = uuidv4();
    const otherCommentId = uuidv4();
    const dummyLikeId1 = uuidv4();
    const dummyLikeId2 = uuidv4();

    const dummyThread = {
        id: dummyThreadId,
        title: "A New Thread",
        body: "Thread body",
        date: new Date().toISOString(),
    };

    const dummyComment = {
        id: dummyCommentId,
        content: "A comment",
        date: new Date().toISOString(),
        thread: dummyThreadId,
        isDelete: false,
    };

    describe("addLike", () => {
        it("should add a like to the database", async () => {
            await UsersTableTestHelper.addUser({ id: dummyUserId });
            await ThreadsTableTestHelper.addThread({ ...dummyThread, owner: dummyUserId });
            await CommentsTableTestHelper.addComment({ ...dummyComment, owner: dummyUserId });

            const newLike = new Like({ commentId: dummyCommentId, owner: dummyUserId });

            const fakeIdGenerator = () => dummyLikeId1;
            const commentLikeRepositoryPostgres = new CommentLikeRepositoryPostgres(pool, fakeIdGenerator);

            await commentLikeRepositoryPostgres.addLike(newLike);

            const likes = await CommentLikesTableTestHelper.findLikeByCommentIdAndUserId(
                dummyCommentId,
                dummyUserId,
            );
            expect(likes[0]).toMatchObject({
                comment: dummyCommentId,
                owner: dummyUserId,
            });
            
            expect(likes[0].id).toBeDefined();
        });
    });

    describe("verifyUserCommentLike", () => {
        it("should return true if a user has liked a comment", async () => {
            const like = new Like({ commentId: dummyCommentId, owner: dummyUserId });

            await UsersTableTestHelper.addUser({ id: dummyUserId });
            await ThreadsTableTestHelper.addThread({ ...dummyThread, owner: dummyUserId });
            await CommentsTableTestHelper.addComment({ ...dummyComment, owner: dummyUserId });
            await CommentLikesTableTestHelper.addLike({ id: dummyLikeId1, ...like });

            const commentLikeRepositoryPostgres = new CommentLikeRepositoryPostgres(pool, {});

            const isCommentLiked = await commentLikeRepositoryPostgres.verifyUserCommentLike(like);
            expect(isCommentLiked).toBe(true);
        });

        it("should return false if a user has not liked a comment", async () => {
            const like = new Like({ commentId: dummyCommentId, owner: dummyUserId });

            await UsersTableTestHelper.addUser({ id: dummyUserId });
            await ThreadsTableTestHelper.addThread({ ...dummyThread, owner: dummyUserId });
            await CommentsTableTestHelper.addComment({ ...dummyComment, owner: dummyUserId });

            const commentLikeRepositoryPostgres = new CommentLikeRepositoryPostgres(pool, {});

            const isCommentLiked = await commentLikeRepositoryPostgres.verifyUserCommentLike(like);
            expect(isCommentLiked).toBe(false);
        });
    });

    describe("getLikesByThreadId", () => {
        it("should return the likes for a thread", async () => {
            await UsersTableTestHelper.addUser({ id: dummyUserId });
            await ThreadsTableTestHelper.addThread({ ...dummyThread, owner: dummyUserId });
            await CommentsTableTestHelper.addComment({ ...dummyComment, owner: dummyUserId });
            await CommentsTableTestHelper.addComment({
                ...dummyComment,
                id: otherCommentId,
                owner: dummyUserId,
            });
            await CommentLikesTableTestHelper.addLike({
                id: dummyLikeId1,
                commentId: dummyCommentId,
                owner: dummyUserId,
            });
            await CommentLikesTableTestHelper.addLike({
                id: dummyLikeId2,
                commentId: otherCommentId,
                owner: dummyUserId,
            });

            const commentLikeRepositoryPostgres = new CommentLikeRepositoryPostgres(pool, {});
            const threadCommentLikes = await commentLikeRepositoryPostgres.getLikesByThreadId(dummyThreadId);

            expect(threadCommentLikes).toHaveLength(2);
            expect(threadCommentLikes[0].id).toStrictEqual(dummyLikeId1);
            expect(threadCommentLikes[0].comment).toStrictEqual(dummyCommentId);
            expect(threadCommentLikes[1].id).toStrictEqual(dummyLikeId2);
            expect(threadCommentLikes[1].comment).toStrictEqual(otherCommentId);
        });
    });

    describe("deleteLike", () => {
        it("should delete a like from the database", async () => {
            const like = new Like({ commentId: dummyCommentId, owner: dummyUserId });

            await UsersTableTestHelper.addUser({ id: dummyUserId });
            await ThreadsTableTestHelper.addThread({ ...dummyThread, owner: dummyUserId });
            await CommentsTableTestHelper.addComment({ ...dummyComment, owner: dummyUserId });
            await CommentLikesTableTestHelper.addLike({ id: dummyLikeId1, ...like });

            const commentLikeRepositoryPostgres = new CommentLikeRepositoryPostgres(pool, {});
            await commentLikeRepositoryPostgres.deleteLike(like);

            const likes = await CommentLikesTableTestHelper.findLikeById(dummyLikeId1);
            expect(likes).toHaveLength(0);
        });
    });
});
