const path = require('path')
//Implementação utilizando express
const express = require('express');
//Carrega para a variável os recursos do express
const app = express ()
const bodyParser = require('body-parser');
//const methodOverride = require('method-override')
var moment = require('moment')
app.locals.moment = moment;
const home = require('./routes/home')
const port = 4000;

app.set('views', path.join(__dirname, 'views'));

// require('moment/locale/pt-br');
// moment.locale('pt-br');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
//para trabalhar com requisições post em node, é necessário o bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('views', path.join(__dirname, 'views'))
//Caregando meu sequelize
require('./model/index')

app.use('/', home);



//Rota o servidor na porta especificada
app.listen(port, () => console.log(`App listening in localhost:${port}`));