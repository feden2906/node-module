const { userService } = require('../services');

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await userService.findAll();
      res.json(users);
    } catch (e) {
      console.log(e);
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await userService.findOneById();
      res.json(user);
    } catch (e) {
      console.log(e);
    }
  },
  createUser: async (req, res) => {
    try {
      const { name, age } = req.body;

      await userService.insertUser(name, age);
      res.json('success');
    } catch (e) {
      console.log(e);
    }
  },

};
