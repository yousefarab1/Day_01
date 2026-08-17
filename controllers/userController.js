const userModel = require("../models/user");


exports.getAllUsers = async (req, res) => {
    const users = await userModel.getAllUsers();

    return res.status(200).json(users);
};


exports.getUserById = async (req, res) => {
    const id = +req.params.id;

    const user = await userModel.getUserById(id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    return res.status(200).json(user);
};


exports.createUser = async (req, res) => {
    const { name, age, email, pass } = req.body;

    const user = new userModel(
        name,
        age,
        email,
        pass
    );

    const userId = await userModel.createUser(user);

    user.id = userId;

    return res.status(201).json(user);
};


exports.deleteUser = async (req, res) => {
    const id = +req.params.id;

    const deletedUser = await userModel.deleteUser(id);

    if (!deletedUser) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    return res.status(200).json({
        message: "User deleted successfully",
        user: deletedUser
    });
};


exports.updateUser = async (req, res) => {
    const id = +req.params.id;

    const { name, age, email, pass } = req.body;

    const user = await userModel.updateUser(
        id,
        name,
        age,
        email,
        pass
    );

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    return res.status(200).json(user);
};