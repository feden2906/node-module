const { UserModel } = require('../database/models');
const { ErrorHandler, errorMessages: { RECORD_NOT_FOUND, INVALID_DATA } } = require('../error');

module.exports = {
  checkUserAvailable: async (req, res, next) => {
    try {
      const { userId } = req.params;

      const userById = await UserModel.findById(userId);

      if (!userById) {
        throw new ErrorHandler(RECORD_NOT_FOUND.status, RECORD_NOT_FOUND.message, RECORD_NOT_FOUND.code);
      }

      req.user = userById;

      next();
    } catch (e) {
      next(e);
    }
  },
  checkNameCorrect: (req, res, next) => {
    try {
      if (!UserModel.name) {
        throw new ErrorHandler(INVALID_DATA.status, INVALID_DATA.message, INVALID_DATA.code);
      }
      next();
    } catch
    (e) {
      next(e);
    }
  },

};
