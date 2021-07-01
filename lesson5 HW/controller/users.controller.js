const { UserModel } = require('../database/models');
const { responseCodes } = require('../constants/constant');
const { passwordHasher } = require('../helpers/index');

module.exports = {
  getUsers: async (req, res) => {
    const users = await UserModel.find();

    res.json(users);
  },
  createUser: async (req, res) => {
    try {
      const { password } = req.body;
      const hashedpassword = await passwordHasher.hash(password);
      const createdUser = await UserModel.create({ ...req.body, password: hashedpassword });

      res.status(responseCodes.CREATED).json(createdUser);
    } catch (e) {
      console.log(e);
    }
  },

  getUserById: (req, res) => {
    res.json(req.user);
  },

  deleteUserById: async (req, res) => {
    try {
      const userbyId = await UserModel.delete(req.params.id);
      res.status(responseCodes.NO_CONTENT).json(userbyId);
    } catch (e) {
      console.log(e);
    }
  },

  updateUser: async (req, res) => {
    try {
      await UserModel.findOneAndUpdate({ id: req.params.id }, req.body);
      res.status(responseCodes.CREATED).json(responseCodes.SUCCESS);
    } catch (e) {
      console.log(e);
    }
  }
};
