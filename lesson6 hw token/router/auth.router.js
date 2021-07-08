const authRouter = require('express')
  .Router();
const { authMiddleware } = require('../middlewares');
const { authController } = require('../controller');

authRouter.post('/login', authMiddleware.checkPasswordCorect, authController.login);
authRouter.post('/logout', authMiddleware.checkTokenAccess, authController.logout);
authRouter.post('/refresh', authMiddleware.checkTokenRefresh, authController.refresh);

module.exports = authRouter;
