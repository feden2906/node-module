const db = require('../dataBase/users');

module.exports = {
  findAll: () => db,

  insertUser: (userObject) => {
    db.push(userObject);
  },

  findOneById: (req, res) => {
    const user = db[req.body.id];
    res.status(204).json(user);
  },

  deleteUserById: (req, res) => {
    const user = db[req.body.id];
    res.status(204).json(user);
  }

};
