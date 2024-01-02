let sequelize = require('../model/index')

const path = require('path');
const Sequelize = require('sequelize');
const Consultas = require('../model/consultas');
const { error } = require('console');

module.exports = (req, res) => {
    Consultas.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        console.log("Deletado")
    })
    .catch((err) => {
        console.error('Erro ao remover o cliente:', err)
    })
}