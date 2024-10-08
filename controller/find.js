let sequelize = require('../model/index');

const path = require('path');
const Sequelize = require('sequelize');
const Consultas = require('../model/consultas');

module.exports = (req, res) => {
    Consultas
        .findAll({
            order: [['dataExame', 'ASC']]  // Ordena os resultados pela coluna dataExame em ordem crescente
        })
        .then((consultas) => {
            return res.render('home', {
                title: "Lista de Exames",
                consultas: consultas, // variável contendo todos os registros contidos no objeto consultas
                msg: req.query.msg
            });
        })
        .catch((err) => {
            console.error('erro: ', err);
        });
}
