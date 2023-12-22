const path = require('path')
//Implementação utilizando express
const express = require('express');
//Carrega para a variável os recursos do express
const app = express ()
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

//Rota o servidor na porta especificada
app.listen(port, () => console.log(`App listening in localhost:${port}`));