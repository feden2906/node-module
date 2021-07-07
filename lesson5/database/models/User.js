const {
  model,
  Schema
} = require('mongoose');

const UserModel = new Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true,
    select: false
  }
}, { timestamps: true });

module.exports = model('users', UserModel);
