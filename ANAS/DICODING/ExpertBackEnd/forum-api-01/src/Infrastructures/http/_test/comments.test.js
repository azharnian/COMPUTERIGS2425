const { v4: uuidv4 } = require("uuid");
const pool = require("../../database/postgres/pool");
const UsersTableTestHelper = require("../../../../tests/UsersTableTestHelper");
const AuthenticationsTableTestHelper = require("../../../../tests/AuthenticationsTableTestHelper");
const ThreadsTableTestHelper = require("../../../../tests/ThreadsTableTestHelper");
const CommentsTableTestHelper = require("../../../../tests/CommentsTableTestHelper");
const ServerTestHelper = require("../../../../tests/ServerTestHelper");
const container = require("../../container");
const createServer = require("../createServer");

describe("threads comments endpoint", () => {
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
        await CommentsTableTestHelper.cleanTable();
        await ThreadsTableTestHelper.cleanTable();
        await UsersTableTestHelper.cleanTable();
        await AuthenticationsTableTestHelper.cleanTable();
    });

    describe("when POST /threads/{threadId}/comments", () => {
        it("should response 201 and added comment", async () => {
            const threadId = uuidv4();
            const requestPayload = { content: "A comment" };

            const { accessToken, userId } = await serverTestHelper.getAccessTokenAndUserId();

            await ThreadsTableTestHelper.addThread({
                id: threadId,
                title: "A New Thread",
                body: "Thread body",
                owner: userId,
                date: new Date().toISOString(),
            });

            const response = await server.inject({
                method: "POST",
                url: `/threads/${threadId}/comments`,
                payload: requestPayload,
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(201);
            expect(responseJson.status).toEqual("success");
            expect(responseJson.data.addedComment).toBeTruthy();
            expect(responseJson.data.addedComment.content).toEqual(requestPayload.content);
        });

        it("should response 400 if payload not contain needed property", async () => {
            const threadId = uuidv4();
            const { accessToken, userId } = await serverTestHelper.getAccessTokenAndUserId();

            await ThreadsTableTestHelper.addThread({
                id: threadId,
                title: "A New Thread",
                body: "Thread body",
                owner: userId,
                date: new Date().toISOString(),
            });

            const response = await server.inject({
                method: "POST",
                url: `/threads/${threadId}/comments`,
                payload: {},
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(400);
            expect(responseJson.status).toEqual("fail");
            expect(responseJson.message).toEqual("tidak dapat membuat komentar baru karena properti yang dibutuhkan tidak ada");
        });

        it("should response 400 if payload wrong data type", async () => {
            const threadId = uuidv4();
            const requestPayload = { content: 1234 };

            const { accessToken, userId } = await serverTestHelper.getAccessTokenAndUserId();

            await ThreadsTableTestHelper.addThread({
                id: threadId,
                title: "A New Thread",
                body: "Thread body",
                owner: userId,
                date: new Date().toISOString(),
            });

            const response = await server.inject({
                method: "POST",
                url: `/threads/${threadId}/comments`,
                payload: requestPayload,
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(400);
            expect(responseJson.status).toEqual("fail");
            expect(responseJson.message).toEqual("komentar harus berupa string");
        });

        it("should response 404 if thread is not exist", async () => {
            const threadId = uuidv4();
            const requestPayload = { content: "A comment" };
            const { accessToken } = await serverTestHelper.getAccessTokenAndUserId();

            const response = await server.inject({
                method: "POST",
                url: `/threads/${threadId}/comments`,
                payload: requestPayload,
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(404);
            expect(responseJson.status).toEqual("fail");
            expect(responseJson.message).toEqual("thread tidak ditemukan");
        });

        it("should response 401 if headers not contain access token", async () => {
            const threadId = uuidv4();
            const requestPayload = { content: "A comment" };
            const { userId } = await serverTestHelper.getAccessTokenAndUserId();

            await ThreadsTableTestHelper.addThread({
                id: threadId,
                title: "A New Thread",
                body: "Thread body",
                owner: userId,
                date: new Date().toISOString(),
            });

            const response = await server.inject({
                method: "POST",
                url: `/threads/${threadId}/comments`,
                payload: requestPayload,
            });

            expect(response.statusCode).toEqual(401);
        });
    });

    describe("when DELETE /threads/{threadId}/comments/{commentId}", () => {
        it("should response 200", async () => {
            const threadId = uuidv4();
            const commentId = uuidv4();

            const { accessToken, userId } = await serverTestHelper.getAccessTokenAndUserId();

            await ThreadsTableTestHelper.addThread({
                id: threadId,
                title: "Thread Title",
                body: "Thread body",
                owner: userId,
                date: new Date().toISOString(),
            });

            await CommentsTableTestHelper.addComment({
                id: commentId,
                content: "A comment",
                thread: threadId,
                owner: userId,
                date: new Date().toISOString(),
                isDelete: false,
            });

            const response = await server.inject({
                method: "DELETE",
                url: `/threads/${threadId}/comments/${commentId}`,
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.status).toEqual("success");
        });

        it("should response 404 if comment is not exist", async () => {
            const threadId = uuidv4();
            const commentId = uuidv4();

            const { accessToken, userId } = await serverTestHelper.getAccessTokenAndUserId();

            await ThreadsTableTestHelper.addThread({
                id: threadId,
                title: "Thread Title",
                body: "Thread body",
                owner: userId,
                date: new Date().toISOString(),
            });

            const response = await server.inject({
                method: "DELETE",
                url: `/threads/${threadId}/comments/${commentId}`,
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(404);
            expect(responseJson.status).toEqual("fail");
            expect(responseJson.message).toEqual("komentar tidak ditemukan");
        });

        it("should response 404 if comment already deleted", async () => {
            const threadId = uuidv4();
            const commentId = uuidv4();

            const { accessToken, userId } = await serverTestHelper.getAccessTokenAndUserId();

            await ThreadsTableTestHelper.addThread({ id: threadId, title: "Title", body: "Body", owner: userId });
            await CommentsTableTestHelper.addComment({
                id: commentId,
                content: "Content",
                thread: threadId,
                owner: userId,
                date: new Date().toISOString(),
                isDelete: false,
            });

            await server.inject({
                method: "DELETE",
                url: `/threads/${threadId}/comments/${commentId}`,
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            const response = await server.inject({
                method: "DELETE",
                url: `/threads/${threadId}/comments/${commentId}`,
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(404);
            expect(responseJson.message).toEqual("komentar tidak valid");
        });

        it("should response 404 if comment is not in thread", async () => {
            const threadId1 = uuidv4();
            const threadId2 = uuidv4();
            const commentId = uuidv4();

            const { accessToken, userId } = await serverTestHelper.getAccessTokenAndUserId();

            await ThreadsTableTestHelper.addThread({ id: threadId1, title: "Thread 1", body: "Body", owner: userId });
            await ThreadsTableTestHelper.addThread({ id: threadId2, title: "Thread 2", body: "Body", owner: userId });

            await CommentsTableTestHelper.addComment({
                id: commentId,
                content: "Comment",
                thread: threadId1,
                owner: userId,
                date: new Date().toISOString(),
                isDelete: false,
            });

            const response = await server.inject({
                method: "DELETE",
                url: `/threads/${threadId2}/comments/${commentId}`,
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(404);
            expect(responseJson.message).toEqual("komentar dalam thread tidak ditemukan");
        });

        it("should response 403 if not authorized", async () => {
            const threadId = uuidv4();
            const commentId = uuidv4();

            const { userId } = await serverTestHelper.getAccessTokenAndUserId();
            const { accessToken: otherToken } = await serverTestHelper.getAccessTokenAndUserId({
                username: "anotheruser",
                password: "password",
                fullname: "Another User",
            });

            await ThreadsTableTestHelper.addThread({ id: threadId, title: "Thread", body: "Body", owner: userId });

            await CommentsTableTestHelper.addComment({
                id: commentId,
                content: "Comment",
                thread: threadId,
                owner: userId,
                date: new Date().toISOString(),
                isDelete: false,
            });

            const response = await server.inject({
                method: "DELETE",
                url: `/threads/${threadId}/comments/${commentId}`,
                headers: { Authorization: `Bearer ${otherToken}` },
            });

            expect(response.statusCode).toEqual(403);
        });

        it("should response 401 if no access token", async () => {
            const threadId = uuidv4();
            const commentId = uuidv4();

            const { userId } = await serverTestHelper.getAccessTokenAndUserId();

            await ThreadsTableTestHelper.addThread({ id: threadId, title: "Thread", body: "Body", owner: userId });

            await CommentsTableTestHelper.addComment({
                id: commentId,
                content: "Comment",
                thread: threadId,
                owner: userId,
                date: new Date().toISOString(),
                isDelete: false,
            });

            const response = await server.inject({
                method: "DELETE",
                url: `/threads/${threadId}/comments/${commentId}`,
            });

            expect(response.statusCode).toEqual(401);
        });
    });
});
