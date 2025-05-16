const { v4: uuidv4 } = require("uuid");
const pool = require("../../database/postgres/pool");
const UsersTableTestHelper = require("../../../../tests/UsersTableTestHelper");
const AuthenticationsTableTestHelper = require("../../../../tests/AuthenticationsTableTestHelper");
const ThreadsTableTestHelper = require("../../../../tests/ThreadsTableTestHelper");
const CommentsTableTestHelper = require("../../../../tests/CommentsTableTestHelper");
const RepliesTableTestHelper = require("../../../../tests/RepliesTableTestHelper");
const ServerTestHelper = require("../../../../tests/ServerTestHelper");
const container = require("../../container");
const createServer = require("../createServer");

describe("replies endpoint", () => {
  let server;
  let serverTestHelper;

  const threadId = uuidv4();
  const commentId = uuidv4();
  const replyId = uuidv4();
  const otherThreadId = uuidv4();

  const dummyThread = {
    id: threadId,
    title: "A New Thread",
    body: "Thread body",
    date: new Date().toISOString(),
  };

  const dummyComment = {
    id: commentId,
    content: "A comment",
    date: new Date().toISOString(),
    thread: threadId,
    isDelete: false,
  };

  beforeAll(async () => {
    server = await createServer(container);
    serverTestHelper = new ServerTestHelper(server);
  });

  afterAll(async () => {
    await pool.end();
  });

  afterEach(async () => {
    await RepliesTableTestHelper.cleanTable();
    await CommentsTableTestHelper.cleanTable();
    await ThreadsTableTestHelper.cleanTable();
    await UsersTableTestHelper.cleanTable();
    await AuthenticationsTableTestHelper.cleanTable();
  });

  describe("when POST /threads/{threadId}/comments/{commentId}/replies", () => {
    it("should response 201 and added reply", async () => {
      const requestPayload = { content: "A reply" };
      const { accessToken, userId } = await serverTestHelper.getAccessTokenAndUserId();

      await ThreadsTableTestHelper.addThread({ ...dummyThread, owner: userId });
      await CommentsTableTestHelper.addComment({ ...dummyComment, owner: userId });

      const response = await server.inject({
        method: "POST",
        url: `/threads/${threadId}/comments/${commentId}/replies`,
        payload: requestPayload,
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(201);
      expect(responseJson.status).toEqual("success");
      expect(responseJson.data.addedReply).toBeTruthy();
      expect(responseJson.data.addedReply.content).toEqual(requestPayload.content);
    });

    it("should response 400 if payload not contain needed property", async () => {
      const { accessToken, userId } = await serverTestHelper.getAccessTokenAndUserId();

      await ThreadsTableTestHelper.addThread({ ...dummyThread, owner: userId });
      await CommentsTableTestHelper.addComment({ ...dummyComment, owner: userId });

      const response = await server.inject({
        method: "POST",
        url: `/threads/${threadId}/comments/${commentId}/replies`,
        payload: {},
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual("fail");
      expect(responseJson.message).toEqual("tidak dapat membuat balasan baru karena properti yang dibutuhkan tidak ada");
    });

    it("should response 400 if payload wrong data type", async () => {
      const requestPayload = { content: 4567 };
      const { accessToken, userId } = await serverTestHelper.getAccessTokenAndUserId();

      await ThreadsTableTestHelper.addThread({ ...dummyThread, owner: userId });
      await CommentsTableTestHelper.addComment({ ...dummyComment, owner: userId });

      const response = await server.inject({
        method: "POST",
        url: `/threads/${threadId}/comments/${commentId}/replies`,
        payload: requestPayload,
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual("fail");
      expect(responseJson.message).toEqual("balasan harus berupa string");
    });

    it("should response 404 if replied comment is not exist in thread", async () => {
      const requestPayload = { content: "A reply" };
      const { accessToken, userId } = await serverTestHelper.getAccessTokenAndUserId();

      await ThreadsTableTestHelper.addThread({ ...dummyThread, owner: userId });
      await CommentsTableTestHelper.addComment({ ...dummyComment, owner: userId });
      await ThreadsTableTestHelper.addThread({ ...dummyThread, id: otherThreadId, owner: userId });

      const response = await server.inject({
        method: "POST",
        url: `/threads/${otherThreadId}/comments/${commentId}/replies`,
        payload: requestPayload,
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(404);
      expect(responseJson.status).toEqual("fail");
      expect(responseJson.message).toEqual("komentar dalam thread tidak ditemukan");
    });

    it("should response 404 if comment is not exist", async () => {
      const requestPayload = { content: "A reply" };
      const { accessToken, userId } = await serverTestHelper.getAccessTokenAndUserId();

      await ThreadsTableTestHelper.addThread({ ...dummyThread, owner: userId });

      const nonExistentCommentId = uuidv4();

      const response = await server.inject({
        method: "POST",
        url: `/threads/${threadId}/comments/${nonExistentCommentId}/replies`,
        payload: requestPayload,
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(404);
      expect(responseJson.status).toEqual("fail");
      expect(responseJson.message).toEqual("komentar tidak ditemukan");
    });

    it("should response 404 if comment is not valid or deleted", async () => {
      const requestPayload = { content: "A reply" };
      const { accessToken, userId } = await serverTestHelper.getAccessTokenAndUserId();

      await ThreadsTableTestHelper.addThread({ ...dummyThread, owner: userId });
      await CommentsTableTestHelper.addComment({ ...dummyComment, owner: userId });

      await server.inject({
        method: "DELETE",
        url: `/threads/${threadId}/comments/${commentId}`,
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const response = await server.inject({
        method: "POST",
        url: `/threads/${threadId}/comments/${commentId}/replies`,
        payload: requestPayload,
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(404);
      expect(responseJson.status).toEqual("fail");
      expect(responseJson.message).toEqual("komentar tidak valid");
    });

    it("should response 404 if thread is not exist", async () => {
      const requestPayload = { content: "A reply" };
      const { accessToken } = await serverTestHelper.getAccessTokenAndUserId();

      const nonExistentThreadId = uuidv4();
      const nonExistentCommentId = uuidv4();

      const response = await server.inject({
        method: "POST",
        url: `/threads/${nonExistentThreadId}/comments/${nonExistentCommentId}/replies`,
        payload: requestPayload,
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(404);
      expect(responseJson.status).toEqual("fail");
      expect(responseJson.message).toEqual("thread tidak ditemukan");
    });

    it("should response 401 if headers not contain access token", async () => {
      const requestPayload = { content: "A reply" };
      const { userId } = await serverTestHelper.getAccessTokenAndUserId();

      await ThreadsTableTestHelper.addThread({ ...dummyThread, owner: userId });
      await CommentsTableTestHelper.addComment({ ...dummyComment, owner: userId });

      const response = await server.inject({
        method: "POST",
        url: `/threads/${threadId}/comments/${commentId}/replies`,
        payload: requestPayload,
      });

      expect(response.statusCode).toEqual(401);
    });
  });

  describe("when DELETE /threads/{threadId}/comments/{commentId}/replies/{replyId}", () => {
    const dummyReply = {
      id: replyId,
      content: "A new reply",
      date: new Date().toISOString(),
      comment: commentId,
      isDelete: false,
    };

    it("should response 200", async () => {
      const { accessToken, userId } = await serverTestHelper.getAccessTokenAndUserId();

      await ThreadsTableTestHelper.addThread({ ...dummyThread, owner: userId });
      await CommentsTableTestHelper.addComment({ ...dummyComment, owner: userId });
      await RepliesTableTestHelper.addReply({ ...dummyReply, owner: userId });

      const response = await server.inject({
        method: "DELETE",
        url: `/threads/${threadId}/comments/${commentId}/replies/${replyId}`,
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.status).toEqual("success");
    });

    it("should response 404 if reply is not exist", async () => {
      const { accessToken, userId } = await serverTestHelper.getAccessTokenAndUserId();

      await ThreadsTableTestHelper.addThread({ ...dummyThread, owner: userId });
      await CommentsTableTestHelper.addComment({ ...dummyComment, owner: userId });

      const response = await server.inject({
        method: "DELETE",
        url: `/threads/${threadId}/comments/${commentId}/replies/${uuidv4()}`,
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(404);
      expect(responseJson.status).toEqual("fail");
      expect(responseJson.message).toEqual("balasan tidak ditemukan");
    });
  });
});
