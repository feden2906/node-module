const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const {
  ACCESS_TIME,
  REFRESH_TIME
} = require('../constants/constant');
const {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET
} = require('../constants/constant');

const verifyPromise = promisify(jwt.verify);

module.exports = {
  generateTokenPair: () => {
    const accessToken = jwt.sign({}, ACCESS_TOKEN_SECRET, { ACCESS_TIME });
    const refreshToken = jwt.sign({}, REFRESH_TOKEN_SECRET, { REFRESH_TIME });

    return {
      accessToken,
      refreshToken
    };
  },

  verifyToken: async (token, tokenType = 'access') => {
    const secretWord = tokenType === 'access' ? ACCESS_TOKEN_SECRET : REFRESH_TOKEN_SECRET;

    await verifyPromise(token, secretWord);
  }
};
