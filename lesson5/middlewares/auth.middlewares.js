const { AUTHORIZATION } = require('../constants/constant');
const { UNAUTHORIZED } = require('../error/errorMessage');
const { ErrorHandler } = require('../error/ErrorHandler');
const { verifyToken } = require('../helpers/auth.helpper');
const { Auth } = require('../database/models');

module.exports = {
  checkTokenAccess: async (req, res, next) => {
    try {
      const token = req.get(AUTHORIZATION);

      if (!token) {
        throw new ErrorHandler(UNAUTHORIZED.message, UNAUTHORIZED.status, UNAUTHORIZED.code);
      }
      await verifyToken(token);
      const userByToken = await Auth.findOne({ accessToken: token });
      if (!userByToken) {
        throw new ErrorHandler(UNAUTHORIZED.message, UNAUTHORIZED.status, UNAUTHORIZED.code);
      }
      req.user = userByToken.user;
    } catch (e) {
      next(e);
    }
  },

  checkTokenRefresh: async (req, res, next) => {
    try {
      const token = req.get(AUTHORIZATION);
      console.log(token);

      if (!token) {
        throw new ErrorHandler(UNAUTHORIZED.code, UNAUTHORIZED.message, UNAUTHORIZED.status);
      }
      await verifyToken(token, 'refresh');

      const userByToken = await Auth.findOne({ refreshToken: token });

      if (!userByToken) {
        throw new ErrorHandler(UNAUTHORIZED.code, UNAUTHORIZED.message, UNAUTHORIZED.status);
      }
      req.user = userByToken.user;
    } catch (e) {
      next(e);
    }
  }

};
