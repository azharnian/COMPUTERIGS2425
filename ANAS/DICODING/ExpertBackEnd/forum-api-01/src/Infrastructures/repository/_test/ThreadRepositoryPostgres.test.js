const { v4: uuidv4 } = require("uuid");

const UsersTableTestHelper = require("../../../../tests/UsersTableTestHelper");
const ThreadsTableTestHelper = require("../../../../tests/ThreadsTableTestHelper");
const NotFoundError = require("../../../Commons/exceptions/NotFoundError");
const NewThread = require("../../../Domains/threads/entities/NewThread");
const AddedThread = require("../../../Domains/threads/entities/AddedThread");
const pool = require("../../database/postgres/pool");
const ThreadRepositoryPostgres = require("../ThreadRepositoryPostgres");

describe("ThreadRepositoryPostgres", () => {
    afterEach(async () => {
        await ThreadsTableTestHelper.cleanTable();
        await UsersTableTestHelper.cleanTable();
    });

    afterAll(async () => {
        await pool.end();
    });

    describe("checkThreadAvailability function", () => {
        it("should throw NotFoundError when thread not available", async () => {
            const threadRepositoryPostgres = new ThreadRepositoryPostgres(pool, {});

            await expect(threadRepositoryPostgres.checkThreadAvailability(uuidv4()))
                .rejects.toThrowError(NotFoundError);
        });

        it("should not throw NotFoundError when thread available", async () => {
            const userId = uuidv4();
            const threadId = uuidv4();

            await UsersTableTestHelper.addUser({ id: userId });
            await ThreadsTableTestHelper.addThread({ id: threadId, owner: userId });
            const threadRepositoryPostgres = new ThreadRepositoryPostgres(pool, {});

            await expect(threadRepositoryPostgres.checkThreadAvailability(threadId))
                .resolves.not.toThrowError(NotFoundError);
        });
    });

    describe("addThread function", () => {
        beforeEach(async () => {
            await UsersTableTestHelper.addUser({ id: uuidv4() });
        });

        it("should persist new thread", async () => {
            const newThread = new NewThread({
                title: "A thread",
                body: "A long thread",
            });

            // Gunakan idGenerator yang menghasilkan UUID
            const fakeIdGenerator = () => uuidv4();
            const threadRepositoryPostgres = new ThreadRepositoryPostgres(pool, fakeIdGenerator);

            // Kita juga perlu ambil userId yang sudah kita buat di beforeEach
            // Supaya userId dipakai benar, kita simpan dulu userId-nya
            const userRows = await UsersTableTestHelper.findUsers(); // Misal ini method untuk get all users
            const userId = userRows[0].id;

            await threadRepositoryPostgres.addThread(userId, newThread);

            // Cari thread berdasarkan ID yang di-generate oleh fakeIdGenerator tadi (karena UUID, kita tidak tahu pasti)
            // Jadi untuk cek, bisa cari thread dengan title sama atau owner sama
            const threads = await ThreadsTableTestHelper.findThreadsByOwner(userId);

            expect(threads).toHaveLength(1);
            expect(threads[0].title).toBe("A thread");
        });

        it("should return added thread correctly", async () => {
            const newThread = new NewThread({
                title: "A thread",
                body: "A long thread",
            });

            const fakeIdGenerator = () => uuidv4();
            const threadRepositoryPostgres = new ThreadRepositoryPostgres(pool, fakeIdGenerator);

            // Ambil userId yang sudah ada
            const userRows = await UsersTableTestHelper.findUsers();
            const userId = userRows[0].id;

            const addedThread = await threadRepositoryPostgres.addThread(userId, newThread);

            expect(addedThread).toBeInstanceOf(AddedThread);
            expect(addedThread.title).toBe("A thread");
            expect(addedThread.owner).toBe(userId);
            expect(typeof addedThread.id).toBe("string");
            expect(addedThread.id.length).toBeGreaterThan(0);
        });
    });

    describe("getThreadById function", () => {
        it("should throw NotFoundError when thread not found", async () => {
            const threadRepositoryPostgres = new ThreadRepositoryPostgres(pool, {});

            await expect(threadRepositoryPostgres.getThreadById(uuidv4()))
                .rejects.toThrowError(NotFoundError);
        });

        it("should return thread correctly", async () => {
            const userId = uuidv4();
            const threadId = uuidv4();
            const date = new Date().toISOString();

            await UsersTableTestHelper.addUser({ id: userId, username: "foobar" });
            await ThreadsTableTestHelper.addThread({
                id: threadId,
                title: "A thread",
                body: "A long thread",
                date,
                owner: userId,
            });

            const threadRepositoryPostgres = new ThreadRepositoryPostgres(pool, {});

            const thread = await threadRepositoryPostgres.getThreadById(threadId);

            expect(thread.id).toStrictEqual(threadId);
            expect(thread.title).toStrictEqual("A thread");
            expect(thread.body).toStrictEqual("A long thread");
            expect(thread.date).toBeTruthy();
            expect(thread.username).toStrictEqual("foobar");
        });
    });
});
