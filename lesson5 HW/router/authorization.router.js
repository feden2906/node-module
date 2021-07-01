const authorizationRouter = require('express').Router();
const { authorizationController } = require('../controller');
const { userValidator } = require('../validators');

authorizationRouter.post('./', userValidator.userCreate, authorizationController.userByEmail);
