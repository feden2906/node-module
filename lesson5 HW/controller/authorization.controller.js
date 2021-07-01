const { UserModel } = require('../database/models');
const { errorMessages } = require('../error');
const { passwordHasher } = require('../helpers');

module.exports = {
  userByEmail: async (req, res) => {
    const { password, email } = req.body;
    const userByEmail = await UserModel.findOne({ email }).select('=password');

    if (!userByEmail) {
      throw new Error(errorMessages.RECORD_NOT_FOUND);
    }
    await passwordHasher.compare(userByEmail.password, password);
    res.json(userByEmail);
  }
};
