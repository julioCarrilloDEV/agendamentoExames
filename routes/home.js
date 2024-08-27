let express = require('express');
//método do express de rota
let router = express.Router()
let find = require('../controller/find');
let create = require('../controller/create');
let remove = require('../controller/remove');
let update = require('../controller/update');
let filter = require('../controller/filter');
let checkin = require('../controller/checkin');
let status = require('../controller/alterarStatus');
let finalizadasFind = require('../controller/finalizadasFind');
let finalizadasFiltradas = require('../controller/finalizadasFiltradas');

//rota
router.get('/', find)
router.post('/', create)
router.delete('/:id', remove)
router.put('/editar/:id', update)
router.get('/consultas/:data', filter)
router.put('/checkin/:id', checkin)
router.put('/finalizar/:id', status)
router.put('/abrir/:id', status)
router.get('/finalizadas', finalizadasFind)
router.get('/finalizadasFiltradas', finalizadasFiltradas)


router.get('/', (req, res) =>{
    res.render('home', {
        message: "hellow"
    }); //procura o que eu especifiquei no diretório de views

})

router.get('/finalizadas', (req, res) => {
    // Renderize a página finalizadas.ejs
    res.render('finalizadas');
});

//:name (parametro)
router.get('/requests/:name', (req, res) =>{
    //req.params captura os parametros enviados. 
    console.log(req.params.name)
})


//exporta o módulo
module.exports = router