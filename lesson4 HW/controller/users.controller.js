const { UserModel } = require('../database/models');
const { responseCodes } = require('../constants/constant');

module.exports = {
  getUsers: async (req, res) => {
    const users = await UserModel.find();

    res.json(users);
  },
  createUser: async (req, res) => {
    try {
      const user = await UserModel.create(req.body);
      res.status(responseCodes.CREATED).json(user);
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
