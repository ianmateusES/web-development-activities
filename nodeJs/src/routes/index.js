const express = require('express');
const configArquivo = require('../config/arquivo');
const LoginController = require('../controllers/LoginController');
const LoginFsController = require('../controllers/LoginFsController');

const routes = express.Router();

// Mostra console
routes.get('/', LoginController.show);
routes.post('/', LoginController.store);

// Salva em arquivo
routes.get('/mostrarlogin', LoginFsController.show);
routes.post('/salvarlogin', LoginFsController.store);


module.exports = routes;
