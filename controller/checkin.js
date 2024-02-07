const Consultas = require('../model/consultas');

module.exports = (req, res) => {
    Consultas
        .update(
            { status: req.body.status }, // Movendo esta parte para fora do objeto where
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
            console.error('Erro ao realizar check-in: ', error);
            res.status(500).send('Erro ao realizar alteração de status.');
        });
}
