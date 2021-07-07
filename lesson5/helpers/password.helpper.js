const bcrypt = require('bcrypt');

module.exports = {
  compare: async (password, hashedpassword) => {
    const isPasswordCompared = await bcrypt.compare(password, hashedpassword);

    if (!isPasswordCompared) {
      throw new Error('Wrong email or password');
    }
  },
  hash: (password) => bcrypt.hash(password, 10)
};
