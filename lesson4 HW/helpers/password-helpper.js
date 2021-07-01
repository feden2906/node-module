const bcrypt = require('bcrypt');

module.exports = {
  compare: async (hashedpassword, password) => {
    const isPasswordCompared = await bcrypt.compare(password, hashedpassword);
    if (!isPasswordCompared) {
      throw new Error('Wrong email or password');
    }
  },
  hash: (password) => bcrypt.hash(password, 10)

};
