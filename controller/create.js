let sequelize = require('../model/index')

const path = require('path');
const Sequelize = require('sequelize');
const Consultas = require('../model/consultas');
const { error } = require('console');

module.exports = (req, res) => {
    Consultas
        .create(req.body)
        .then(() => console.log('Inserção tá mec'))
        .catch(error => {
            console.error('Erro ao inserir ', error);
            res.status(500).json({error: 'Erro interno do servidor'})
        })
}