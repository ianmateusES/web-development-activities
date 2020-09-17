const { store } = require("../config/arquivo");
const { post } = require("../routes");

module.exports = {
  async store(req, res) {
    const { login } = req.body;

    console.log("Método POST, params: " + login);

    return res.json({ login });
  },

  async show(req, res) {
    const { login } = req.query;

    console.log("Método GET, params: " + login);

    return res.json({ login });
  }
}
