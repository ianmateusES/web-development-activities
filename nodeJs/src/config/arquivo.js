const fs = require('fs');
const path = require('path');

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp', 'logEmail.txt');

module.exports = {
  async store(email) {
    const content = '\n' + email;
    fs.appendFileSync(tmpFolder, content, err => {
      if (err) {
        return { error: true }
      }
    });
    
    return { error: false };
  },

  async show() {
    try {
      const data = fs.readFileSync(tmpFolder, 'utf8');
      return { data, error: false };
    } catch (error) {
      return { data: null, error: true };
    }
  },
};
