const knex = require('../bancoDeDado/conexao');

const listarCliente = async (req, res) => {
  try {
    const usuario = await knex('usuarios').select("*");

    if (usuario[0] === undefined) {
      return res.status(404).json("Não foi encontrado nenhum usuario!");
    }

    return res.status(200).json(usuario);

  } catch (error) {
    return res.status(400).json(error.message);
  }
}

module.exports = {
  listarCliente,
};