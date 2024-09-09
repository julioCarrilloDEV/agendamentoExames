let sequelize = require('../model/index')

const path = require('path');
const Sequelize = require('sequelize');
const Consultas = require('../model/consultas')


module.exports = (req, res) => {

    const { dataInicial, dataFinal } = '';
    Consultas
        .findAll({
            order: [['dataExame', 'ASC']]
        })
        .then((consultas) => {
            
            res.render('finalizadas', {
                title: "Exames Finalizados",
                consultas: consultas, //variável contendo todos os registros contidos no objeto consultas
                dataInicial: dataInicial,  // Passa a data inicial para a view
                dataFinal: dataFinal,        // Passa a data final para a view
                msg: req.query.msg
            });
        })
        .catch((err) => {
            console.error('erro: ', err)
        })
}