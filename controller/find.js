let sequelize = require('../model/index')

const path = require('path');
const Sequelize = require('sequelize');
const Consultas = require('../model/consultas')
//let Consultas = require(path.join(__dirname, '../model/consultas'))(sequelize, Sequelize.DataTypes)

module.exports = (req, res) => {
    Consultas
        .findAll()
        .then((consultas) => {
            
            return res.render('home', {
                title: "Lista de Exames",
                consultas: consultas, //variável contendo todos os registros contidos no objeto consultas
                msg: req.query.msg
            })
        })
        .catch((err) => {
            console.error('erro: ', err)
        })
}