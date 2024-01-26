const Consultas = require('../model/consultas');
const Sequelize = require('sequelize');
let sequelize = require('../model/index')
const path = require('path');
const moment = require('moment');

async function filterConsultasPorData(req, res) {
    try {
        const timestampUnix = req.params.data;
        //const dataSelecionada = moment.unix(timestampUnix).format('DD/MM/YYYY');
        const dataSelecionada = moment.unix(timestampUnix).startOf('day'); // Ignorar a parte da hora
        // Calcula o final do dia (23:59:59)
        const finalDoDia = moment(dataSelecionada).endOf('day');

        // Certifique-se de ajustar o modelo (Consulta) conforme necessário
        const consultasPorData = await Consultas.findAll({
            where: {
                dataExame: {
                    [Sequelize.Op.between]: [dataSelecionada.format(), finalDoDia.format()]
                }
            }
        });

        res.json(consultasPorData);
    } catch (error) {
        console.error('Erro na filtragem de consultas por data:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}

module.exports = filterConsultasPorData;