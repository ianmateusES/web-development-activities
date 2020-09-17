const { store } = require("../config/arquivo");
const { show } = require("./LoginController");

module.exports = {
  async store(req, res) {
    const { login } = req.query;
    const { error } = await configArquivo.store(login);

    if (error) {
      return res.status(400).json({});
    }

    return res.status(200).json();
  },

  async show(req, res) {
    const { data, error } = await configArquivo.show();
    if (error) {
      return res.status(400).json({});
    }

    console.log(data);

    return res.json({ emails: data });
  }
}
