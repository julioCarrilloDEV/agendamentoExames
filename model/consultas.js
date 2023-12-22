const db = require('./index')

const Consultas = db.Sequelize.define('consultas', {
    id:{
        type: db.sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nomePaciente:{
        type: db.Sequelize.STRING
    },
    dataAbertura:{
        type: db.Sequelize.STRING
    },
    convenio:{
        type: db.Sequelize.STRING
    },
    tipoExame:{
        type: db.Sequelize.STRING
    },
    dataExame:{
        type: db.Sequelize.STRING
    },
    numGuia:{
        type: db.Sequelize.INTEGER
    }
})
module.exports = Consultas