module.exports = {
  PORT: 3000,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'Secret',
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'REfresh_Secret',

  AUTHORIZATION: 'Authorization',
  ACCESS_TIME: '10m',
  REFRESH_TIME: '30d',

};
