const { v4: uuidv4 } = require("uuid");

const UsersTableTestHelper = require("../../../../tests/UsersTableTestHelper");
const InvariantError = require("../../../Commons/exceptions/InvariantError");
const RegisterUser = require("../../../Domains/users/entities/RegisterUser");
const RegisteredUser = require("../../../Domains/users/entities/RegisteredUser");
const pool = require("../../database/postgres/pool");
const UserRepositoryPostgres = require("../UserRepositoryPostgres");

describe("UserRepositoryPostgres", () => {
    afterEach(async () => {
        await UsersTableTestHelper.cleanTable();
    });

    afterAll(async () => {
        await pool.end();
    });

    describe("verifyAvailableUsername function", () => {
        it("should throw InvariantError when username not available", async () => {
            await UsersTableTestHelper.addUser({ username: "dicoding" });
            const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});

            await expect(userRepositoryPostgres.verifyAvailableUsername("dicoding")).rejects.toThrowError(InvariantError);
        });

        it("should not throw InvariantError when username available", async () => {
            const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});

            await expect(userRepositoryPostgres.verifyAvailableUsername("dicoding")).resolves.not.toThrowError(InvariantError);
        });
    });

    describe("addUser function", () => {
        it("should persist register user and return registered user correctly", async () => {
            const registerUser = new RegisterUser({
                username: "dicoding",
                password: "secret_password",
                fullname: "Dicoding Indonesia",
            });

            // generate UUID sebagai fakeIdGenerator
            const fakeIdGenerator = () => uuidv4();
            const userRepositoryPostgres = new UserRepositoryPostgres(pool, fakeIdGenerator);

            await userRepositoryPostgres.addUser(registerUser);

            // Ambil user yg baru saja ditambahkan utk verifikasi
            const users = await UsersTableTestHelper.findUsersByUsername("dicoding");
            expect(users).toHaveLength(1);
        });

        it("should return registered user correctly", async () => {
            const registerUser = new RegisterUser({
                username: "dicoding",
                password: "secret_password",
                fullname: "Dicoding Indonesia",
            });

            const fakeIdGenerator = () => uuidv4();
            const userRepositoryPostgres = new UserRepositoryPostgres(pool, fakeIdGenerator);

            const registeredUser = await userRepositoryPostgres.addUser(registerUser);

            expect(registeredUser).toBeInstanceOf(RegisteredUser);
            expect(registeredUser.username).toBe("dicoding");
            expect(registeredUser.fullname).toBe("Dicoding Indonesia");
            expect(typeof registeredUser.id).toBe("string");
            expect(registeredUser.id.length).toBeGreaterThan(0);
        });
    });

    describe("getPasswordByUsername", () => {
        it("should throw InvariantError when user not found", () => {
            const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});

            return expect(userRepositoryPostgres.getPasswordByUsername("dicoding"))
                .rejects
                .toThrowError(InvariantError);
        });

        it("should return username password when user is found", async () => {
            await UsersTableTestHelper.addUser({
                username: "dicoding",
                password: "secret_password",
            });
            const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});

            const password = await userRepositoryPostgres.getPasswordByUsername("dicoding");
            expect(password).toBe("secret_password");
        });
    });

    describe("getIdByUsername", () => {
        it("should throw InvariantError when user not found", async () => {
            const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});

            await expect(userRepositoryPostgres.getIdByUsername("dicoding"))
                .rejects
                .toThrowError(InvariantError);
        });

        it("should return user id correctly", async () => {
            const userId = uuidv4();
            await UsersTableTestHelper.addUser({ id: userId, username: "dicoding" });
            const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});

            const returnedUserId = await userRepositoryPostgres.getIdByUsername("dicoding");

            expect(returnedUserId).toEqual(userId);
        });
    });
});
