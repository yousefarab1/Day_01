const { Router } = require('express');

const {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
} = require('../controllers/userController');

const userRouter = Router();

userRouter.get('/', getAllUsers);

userRouter.get('/:id', getUserById);

userRouter.post('/', createUser);

userRouter.delete('/:id', deleteUser);

userRouter.put('/:id', updateUser);

module.exports = userRouter;