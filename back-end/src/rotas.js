const express = require('express');
const rotas = express();

const usuarios = require("./controladores/usuario");

rotas.get("/usuario", usuarios.getUsuario);
rotas.post("/usuario", usuarios.cadastrarUsuario);

module.exports = rotas;