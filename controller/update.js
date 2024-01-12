let sequelize = require('../model/index')

const path = require('path');
const Sequelize = require('sequelize');
const Consultas = require('../model/consultas');
const { error } = require('console');

module.exports = (req, res) => {
    Consultas
        //Verificar se os dados do corpo da solicitação estão sendo recebidos corretamente
        console.log(req.body)
        .update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            console.log("Update ok");
            res.reditect('/');
        })
        .catch(error => {
            console.error("Erro ao atualizar:", error);
            res.status(500).send('Erro ao atualizar a consulta.');
        });
}