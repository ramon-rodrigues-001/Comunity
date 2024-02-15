const express = require('express')
const cors = require("cors");
const mongoose = require('mongoose')

// Rotas
const register = require('./routers/register.js')
const login = require('./routers/login.js');
const Mensagem = require('./routers/rotaDeMensagem.js');

// Configurando o express
const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());


const port = 'mongodb+srv://ramon:13153080552@cluster0.cij4gvt.mongodb.net/'
mongoose.connect(port, {
    useUnifiedTopology: true,
})
.then(()=> {
    app.use('/', register);
    app.use('/', login)
    app.use('/', Mensagem)

    app.listen(4000, ()=> {
        console.log('Conectado ao banco de dados, e servidor esta rodando!')
    })
})
.catch((err)=> { 
    console.log('Erro ao conectar ao MongoDB' + err) 
})
