const userRouter = require('express').Router();

const { userController } = require('../controller');
const { userMiddleware } = require('../middlewares');

userRouter.get('/', userController.getUsers);
userRouter.get('/:userId', userMiddleware.checkUserAvailable, userController.getUserById);
userRouter.post('/', userMiddleware.checkNameCorrect, userController.createUser);
userRouter.delete('/:userId', userMiddleware.checkUserAvailable, userController.deleteUserById);
userRouter.put('/:userId', userMiddleware.checkUserAvailable, userController.updateUser);

module.exports = userRouter;
