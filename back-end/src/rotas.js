const express = require('express');
const rotas = express();

const usuarios = require("./controladores/usuario");

rotas.get("/usuario", usuarios.listarCliente);

module.exports = rotas;