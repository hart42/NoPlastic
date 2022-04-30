const knex = require('../bancoDeDado/conexao');

const getUsuario = async (req, res) => {
  try {
    const usuario = await knex('usuarios').select("*");

    if (usuario[0] === undefined) {
      return res.status(404).json("Não foi encontrado nenhum usuario!");
    }

    return res.status(200).json(usuario);

  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const cadastrarUsuario = async (req, res) => {
  const {
    nome,
    email,
    telefone,
    cep,
    senha
  } = req.body;

  try {
    const verificarEmail = await knex('usuarios').where({ email }).first();

    if (verificarEmail) {
      return res.status(401).json("Email ja cadastrado");
    }

    const usuario = await knex('usuarios').insert({
      nome,
      email,
      telefone,
      cep,
      senha
    }).returning("*");

    if (!usuario) {
      return res.status(400).json("O usuario não foi cadastrado.");
    }

    return res.status(203).json("O usuario foi cadastrado com sucesso!.");

  } catch (error) {
    return res.status(400).json(error.message);
  }
}

module.exports = {
  getUsuario,
  cadastrarUsuario,
};