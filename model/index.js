const Sequelize = require('sequelize');

const sequelize = new Sequelize('agendamentoExames', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});
// authenticate para verificar se a conexão com o banco de dados é bem-sucedida.
sequelize.authenticate()
    .then(() => {
        console.log('Conexão bem-sucedida com o banco de dados');
    })
    .catch((error) => {
        console.error('Erro ao conectar-se ao banco de dados: ', error);
    });

module.exports = {
    Sequelize,
    sequelize
};
