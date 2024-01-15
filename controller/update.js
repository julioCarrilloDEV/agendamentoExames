let sequelize = require('../model/index')

const path = require('path');
const Sequelize = require('sequelize');
const Consultas = require('../model/consultas');
const { error } = require('console');

module.exports = (req, res) => {
    Consultas
        .update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            console.log("Update ok");
            res.redirect('/');
        })
        .catch(error => {
            console.error("Erro ao atualizar:", error);
            res.status(500).send('Erro ao atualizar a consulta.');
        });
}