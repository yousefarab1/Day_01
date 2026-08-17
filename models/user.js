const fs = require("fs/promises");
const path = require("path");

const dataPath = path.resolve(__dirname, "..", "data", "data.json");

module.exports = class User {
    constructor(name, age, email, password) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
    }

    static async getAllUsers() {
        const dataBuffer = await fs.readFile(dataPath);
        const data = JSON.parse(dataBuffer);

        return data.users;
    }

    static async getUserById(id) {
        const dataBuffer = await fs.readFile(dataPath);
        const data = JSON.parse(dataBuffer);

        const user = data.users.find(user => user.id === id);

        return user;
    }

    static async createUser(user) {
        const dataBuffer = await fs.readFile(dataPath);
        const data = JSON.parse(dataBuffer);

        const lastUser = data.users[data.users.length - 1];

        const nextId = lastUser ? lastUser.id + 1 : 1;

        user.id = nextId;

        data.users.push(user);

        await fs.writeFile(
            dataPath,
            JSON.stringify(data, null, 2)
        );

        return nextId;
    }

    static async updateUser(id, name, age, email, password) {
        const dataBuffer = await fs.readFile(dataPath);
        const data = JSON.parse(dataBuffer);

        const user = data.users.find(user => user.id === id);

        if (!user) {
            return null;
        }

        user.name = name;
        user.age = age;
        user.email = email;
        user.password = password;

        await fs.writeFile(
            dataPath,
            JSON.stringify(data, null, 2)
        );

        return user;
    }

    static async deleteUser(id) {
        const dataBuffer = await fs.readFile(dataPath);
        const data = JSON.parse(dataBuffer);

        const userIndex = data.users.findIndex(
            user => user.id === id
        );

        if (userIndex === -1) {
            return null;
        }

        const deletedUser = data.users.splice(userIndex, 1)[0];

        await fs.writeFile(
            dataPath,
            JSON.stringify(data, null, 2)
        );

        return deletedUser;
    }
};