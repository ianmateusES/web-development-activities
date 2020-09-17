const configArquivo = require('../config/arquivo');

module.exports = {
  async store(req, res) {
    const { login } = req.body;
    const { error } = await configArquivo.store(login);

    if (error) {
      return res.status(400).json({});
    }

    return res.status(200).json({ login });
  },

  async show(req, res) {
    const { data, error } = await configArquivo.show();
    if (error) {
      return res.status(400).json({});
    }

    const listEmail = data.trim().split('\n');


    console.log(listEmail);

    return res.json({ emails: listEmail });
  }
}
