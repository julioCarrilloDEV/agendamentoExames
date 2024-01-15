let express = require('express');
//método do express de rota
let router = express.Router()
let find = require('../controller/find');
let create = require('../controller/create');
let remove = require('../controller/remove');
let update = require('../controller/update');

//rota
router.get('/', find)
router.post('/', create)
router.delete('/:id', remove)
router.put('/editar/:id', update)

router.get('/', (req, res) =>{
    res.render('home', {
        message: "hellow"
    }); //procura o que eu especifiquei no diretório de views

})
//:name (parametro)
router.get('/requests/:name', (req, res) =>{
    //req.params captura os parametros enviados. 
    console.log(req.params.name)
})

router.post('/', (req, res) => {
    res.json(req.body)
})
//exporta o módulo
module.exports = router