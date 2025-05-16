const { v4: uuidv4 } = require("uuid");
const pool = require("../../database/postgres/pool");
const UsersTableTestHelper = require("../../../../tests/UsersTableTestHelper");
const AuthenticationsTableTestHelper = require("../../../../tests/AuthenticationsTableTestHelper");
const ThreadsTableTestHelper = require("../../../../tests/ThreadsTableTestHelper");
const CommentsTableTestHelper = require("../../../../tests/CommentsTableTestHelper");
const CommentLikesTableTestHelper = require("../../../../tests/CommentLikesTableTestHelper");
const ServerTestHelper = require("../../../../tests/ServerTestHelper");
const container = require("../../container");
const createServer = require("../createServer");

describe("comment likes endpoint", () => {
    let server;
    let serverTestHelper;

    beforeAll(async () => {
        server = await createServer(container);
        serverTestHelper = new ServerTestHelper(server);
    });

    afterAll(async () => {
        await pool.end();
    });

    afterEach(async () => {
        await CommentLikesTableTestHelper.cleanTable();
        await CommentsTableTestHelper.cleanTable();
        await ThreadsTableTestHelper.cleanTable();
        await UsersTableTestHelper.cleanTable();
        await AuthenticationsTableTestHelper.cleanTable();
    });

    const dummyThread = {
        id: uuidv4(),
        title: "A New Thread",
        body: "Thread body",
        date: new Date().toISOString(),
    };

    const dummyComment = {
        id: uuidv4(),
        content: "A comment",
        date: new Date().toISOString(),
        thread: dummyThread.id,
        isDelete: false,
    };

    describe("when PUT /threads/{threadId}/comments/{commentId}/likes", () => {
        it("should response 200 and like comment if comment is not liked", async () => {
            const { accessToken, userId } = await serverTestHelper.getAccessTokenAndUserId();
            await ThreadsTableTestHelper.addThread({ ...dummyThread, owner: userId });
            await CommentsTableTestHelper.addComment({ ...dummyComment, owner: userId });

            const response = await server.inject({
                method: "PUT",
                url: `/threads/${dummyThread.id}/comments/${dummyComment.id}/likes`,
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.status).toEqual("success");

            const likes = await CommentLikesTableTestHelper.findLikeByCommentIdAndUserId(
                dummyComment.id,
                userId,
            );
            expect(likes).toHaveLength(1);
        });

        it("should response 200 and unlike comment if comment is liked", async () => {
            const { accessToken, userId } = await serverTestHelper.getAccessTokenAndUserId();
            await ThreadsTableTestHelper.addThread({ ...dummyThread, owner: userId });
            await CommentsTableTestHelper.addComment({ ...dummyComment, owner: userId });
            await CommentLikesTableTestHelper.addLike({ commentId: dummyComment.id, owner: userId });

            const response = await server.inject({
                method: "PUT",
                url: `/threads/${dummyThread.id}/comments/${dummyComment.id}/likes`,
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.status).toEqual("success");

            const likes = await CommentLikesTableTestHelper.findLikeByCommentIdAndUserId(
                dummyComment.id,
                userId,
            );
            expect(likes).toHaveLength(0);
        });

        it("should response 404 if liked comment is not exist in thread", async () => {
            const { accessToken, userId } = await serverTestHelper.getAccessTokenAndUserId();
            await ThreadsTableTestHelper.addThread({ ...dummyThread, owner: userId });
            await CommentsTableTestHelper.addComment({ ...dummyComment, owner: userId });

            const otherThreadId = uuidv4();
            await ThreadsTableTestHelper.addThread({ ...dummyThread, id: otherThreadId, owner: userId });

            const response = await server.inject({
                method: "PUT",
                url: `/threads/${otherThreadId}/comments/${dummyComment.id}/likes`,
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(404);
            expect(responseJson.status).toEqual("fail");
            expect(responseJson.message).toEqual("komentar dalam thread tidak ditemukan");
        });

        it("should response 404 if comment is not exist", async () => {
            const { accessToken, userId } = await serverTestHelper.getAccessTokenAndUserId();
            await ThreadsTableTestHelper.addThread({ ...dummyThread, owner: userId });

            const nonExistentCommentId = uuidv4();
            const response = await server.inject({
                method: "PUT",
                url: `/threads/${dummyThread.id}/comments/${nonExistentCommentId}/likes`,
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(404);
            expect(responseJson.status).toEqual("fail");
            expect(responseJson.message).toEqual("komentar tidak ditemukan");
        });

        it("should response 404 if comment is not valid or deleted", async () => {
            const { accessToken, userId } = await serverTestHelper.getAccessTokenAndUserId();
            await ThreadsTableTestHelper.addThread({ ...dummyThread, owner: userId });
            await CommentsTableTestHelper.addComment({ ...dummyComment, owner: userId });

            await server.inject({
                method: "DELETE",
                url: `/threads/${dummyThread.id}/comments/${dummyComment.id}`,
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            const response = await server.inject({
                method: "PUT",
                url: `/threads/${dummyThread.id}/comments/${dummyComment.id}/likes`,
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(404);
            expect(responseJson.status).toEqual("fail");
            expect(responseJson.message).toEqual("komentar tidak valid");
        });

        it("should response 404 if thread is not exist", async () => {
            const { accessToken } = await serverTestHelper.getAccessTokenAndUserId();
            const fakeThreadId = uuidv4();
            const fakeCommentId = uuidv4();

            const response = await server.inject({
                method: "PUT",
                url: `/threads/${fakeThreadId}/comments/${fakeCommentId}/likes`,
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(404);
            expect(responseJson.status).toEqual("fail");
            expect(responseJson.message).toEqual("thread tidak ditemukan");
        });

        it("should response 401 if headers not contain access token", async () => {
            const { userId } = await serverTestHelper.getAccessTokenAndUserId();
            await ThreadsTableTestHelper.addThread({ ...dummyThread, owner: userId });
            await CommentsTableTestHelper.addComment({ ...dummyComment, owner: userId });

            const response = await server.inject({
                method: "PUT",
                url: `/threads/${dummyThread.id}/comments/${dummyComment.id}/likes`,
            });

            expect(response.statusCode).toEqual(401);
        });
    });
});
