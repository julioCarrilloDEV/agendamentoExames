let express = require('express');
//método do express de rota
let router = express.Router()

//rota
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

router.post('/body', (req, res) => {
    res.json(req.body)
})
//exporta o módulo
module.exports = router