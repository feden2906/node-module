const authRouter = require('express')
  .Router();
const {
  userMiddleware,
  authMiddleware
} = require('../middlewares');
const { authController } = require('../controller');

authRouter.post('/login', userMiddleware.getUserByEmail, authController.login);
authRouter.post('/logout', authMiddleware.checkTokenAccess, authController.logout);
authRouter.post('/refresh', authMiddleware.checkTokenRefresh, authController.refresh);

module.exports = authRouter;
