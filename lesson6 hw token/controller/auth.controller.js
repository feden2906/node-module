const { OauthHellper } = require('../helpers');
const { Auth } = require('../database/models');
const { AUTHORIZATION } = require('../constants/constant');
const {
  NO_CONTENT,
  SUCCESS
} = require('../constants/responce-codes.enum');

module.exports = {
  login: async (req, res, next) => {
    try {
      const {
        _id
      } = req.user;

      const tokenPair = OauthHellper.generateTokenPair();
      await Auth.create({
        ...tokenPair,
        user: _id
      });

      res.json({
        ...tokenPair,
        user: req.user
      });
    } catch (e) {
      next(e);
    }
  },
  logout: async (req, res, next) => {
    try {
      const token = req.get(AUTHORIZATION);

      await Auth.remove({ accessToken: token });
      res.status(NO_CONTENT)
        .json(req.user);
    } catch (e) {
      next(e);
    }
  },

  refresh: async (req, res, next) => {
    try {
      const token = req.get(AUTHORIZATION);
      const { _id } = req.user;

      await Auth.remove({ refreshToken: token });

      const createTokenPair = OauthHellper.generateTokenPair();

      await Auth.create({
        ...createTokenPair,
        user: _id
      });

      res.status(SUCCESS)
        .json(req.user);

    } catch (e) {
      next(e);
    }
  }
};
