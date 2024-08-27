const Consultas = require('../model/consultas');
const Sequelize = require('sequelize');
const moment = require('moment');

module.exports = (req, res) => {
    const { dataInicial, dataFinal } = req.query;

    let clausula = {
        status: 'Finalizado'
    };

    // Verifica se as datas foram fornecidas
    if (dataInicial && dataFinal) {
        //adiciona o campo 'dataExame' no objeto clausula
        clausula.dataExame = {
            [Sequelize.Op.between]: [moment(dataInicial).startOf('day').toDate(), moment(dataFinal).endOf('day').toDate()]
        };
    }

    Consultas.findAll({
        //faz um select * que obedeça as condições no objeto, isto é, status finalizado e entre as datas sinalizadas.
        where: clausula
    })
    .then(consultas => {
        res.render('finalizadas', {
            title: "Consultas Finalizadas",
            consultas: consultas,
            dataInicial: dataInicial,  // Passa a data inicial para a view
            dataFinal: dataFinal,        // Passa a data final para a view
            msg: req.query.msg
        });
    })
    .catch(err => {
        console.error('Erro ao buscar consultas finalizadas:', err);
        res.status(500).send('Erro no servidor');
    });
};
