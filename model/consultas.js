const db = require('./index');
const { DataTypes } = require('sequelize');

const Consultas = db.sequelize.define('consultas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nomePaciente: {
        type: DataTypes.STRING
    },
    dataAbertura: {
        type: DataTypes.DATE
    },
    convenio: {
        type: DataTypes.STRING
    },
    tipoExame: {
        type: DataTypes.STRING
    },
    dataExame: {
        type: DataTypes.DATE
    },
    numGuia: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.STRING
    }
});

module.exports = Consultas;
