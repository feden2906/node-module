const UserModel = require('../database/models/User');
const responceCodes = require('../constants/responce-codes.enum');
const { passwordHasher } = require('../helpers/index');

module.exports = {
  getUsers: async (req, res) => {
    const users = await UserModel.find();

    res.json(users);
  },
  createUser: async (req, res, next) => {
    try {
      const { password } = req.body;
      const hashedpassword = await passwordHasher.hash(password);
      const createdUser = await UserModel.create({
        ...req.body,
        password: hashedpassword
      });

      res.status(responceCodes.CREATED)
        .json(createdUser);
    } catch (e) {
      next(e);
    }
  },

  getUserById: (req, res) => {
    res.json(req.user);
  },

  deleteUserById: async (req, res, next) => {
    try {
      const userbyId = await UserModel.delete(req.params.id);
      res.status(responceCodes.NO_CONTENT)
        .json(userbyId);
    } catch (e) {
      next(e);
    }
  },

  updateUser: async (req, res, next) => {
    try {
      await UserModel.findOneAndUpdate({ id: req.params.id }, req.body);
      res.status(responceCodes.CREATED)
        .json(responceCodes.SUCCESS);
    } catch (e) {
      next(e);
    }
  }
};
