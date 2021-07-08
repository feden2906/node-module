const userRouter = require('express')
  .Router();

const { userController } = require('../controller');
const { userMiddleware } = require('../middlewares');
const { userValidator } = require('../validators');

userRouter.get('/', userController.getUsers);
userRouter.post('/', userValidator.userCreate, userController.createUser);
userRouter.get('/:userId', userMiddleware.checkUserAvailable, userController.getUserById);
userRouter.delete('/:userId', userMiddleware.checkUserAvailable, userController.deleteUserById);
userRouter.put('/:userId', userMiddleware.checkUserAvailable, userController.updateUser);

module.exports = userRouter;
