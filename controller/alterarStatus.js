const Consultas = require('../model/consultas');

module.exports = (req, res) => {
    Consultas
        .update(
            { status: req.body.status },
            {
                where: {
                    id: req.params.id
                }
            }
        )
        .then(() => {
            res.sendStatus(200); 
        })
        .catch(error => {
            console.error('Erro ao alterar status: ', error);
            res.status(500).send('Erro ao realizar alteração de status.');
        });
}