const Consultas = require('../model/consultas');
const Sequelize = require('sequelize');
let sequelize = require('../model/index');
const path = require('path');
const moment = require('moment');

async function filterConsultasPorData(req, res) {
    try {
        const timestampUnix = req.params.data;
        const dataSelecionada = moment.unix(timestampUnix).startOf('day'); // Ignorar a parte da hora
        const finalDoDia = moment(dataSelecionada).endOf('day');

        const consultasPorData = await Consultas.findAll({
            where: {
                dataExame: {
                    [Sequelize.Op.between]: [dataSelecionada.format(), finalDoDia.format()]
                }
            },
            order: [['dataExame', 'ASC']] // Ordena os resultados pela coluna dataExame em ordem crescente
        });

        res.json(consultasPorData);
    } catch (error) {
        console.error('Erro na filtragem de consultas por data:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}

module.exports = filterConsultasPorData;
