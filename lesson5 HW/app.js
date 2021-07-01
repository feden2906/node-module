const express = require('express');
const mongoose = require('mongoose');

const constans = require('../lesson4 HW/constants/constant');

const app = express();

_mongooseConnector();

const { userRouter } = require('../lesson4 HW/router');
const { authorizationRouter } = require('./router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);
app.use('/authr', authorizationRouter);

app.use(errorCatcher);

function _mongooseConnector() {
  mongoose.connect('mongodb://localhost:27017/usersDB', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
}

// eslint-disable-next-line no-unused-vars
function errorCatcher(err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message || 'uown error',
    code: err.code || 0
  });
}

app.listen(constans.PORT, () => {
  console.log('App listen 3000');
});
