let sequelize = require('../model/index')

const path = require('path');
const Sequelize = require('sequelize');
const Consultas = require('../model/consultas')


module.exports = (req, res) => {
    Consultas
        .findAll()
        .then((consultas) => {
            
            res.render('finalizadas', {
                title: "Exames Finalizados",
                consultas: consultas, //variável contendo todos os registros contidos no objeto consultas
                msg: req.query.msg
            });
        })
        .catch((err) => {
            console.error('erro: ', err)
        })
}