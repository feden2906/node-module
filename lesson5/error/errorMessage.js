module.exports = {
  RECORD_NOT_FOUND: {
    status: 404,
    message: 'Record not found',
    code: '404.1'
  },

  INVALID_DATA: {
    status: 400,
    message: 'invalid data',
    code: '400.1'
  },
  UNAUTHORIZED: {
    status: 401,
    message: 'Unauthorized',
    code: '401.1'
  },
  USER_ALREADY_EXISTS: {
    status: 409,
    message: 'user already exists'
  }
};
