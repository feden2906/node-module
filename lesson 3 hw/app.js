const express = require('express');

const { constants } = require('./сonstants');
const { userRouter } = require('./routers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);

app.listen(constants.PORT, () => {
  console.log(`App has been started on port ${constants.PORT}...`);
});
