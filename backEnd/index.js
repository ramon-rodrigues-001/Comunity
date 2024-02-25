const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
const mensagemModel = require('./models/mensagem.js');


const registerRouter = require('./routers/register');
const loginRouter = require('./routers/login');
const rotaDeMensagem = require('./routers/rotaDeMensagem')
// const mensagemRouter = require('./routers/rotaDeMensagem');


 
const app = express();
const server = http.createServer(app);
const io = socketio(server, { cors: { origin: 'http://127.0.0.1:5173', methods: ['GET', 'POST']}});


// Configurações do Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


// Configuração das rotas após a conexão com o banco de dados
app.use('/', registerRouter);
app.use('/', loginRouter);
// app.use('/', mensagemRouter);




// Conexão com o MongoDB
const mongoURI = 'mongodb+srv://ramon:13153080552@cluster0.cij4gvt.mongodb.net/';
mongoose.connect(mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}) 
.then(() => {
    console.log('Conectado ao MongoDB');

    // Iniciando o servidor
    const PORT = process.env.PORT || 4000;
    server.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
 
    io.on('connection', async (socket) => {
        console.log('Nova conexão de socket estabelecida', socket.id); 

        try {
            const mensagensSalvas = await mensagemModel.find()
            await socket.emit('respostaMensagem', mensagensSalvas);
        } catch (error) {
            console.error('Erro ao enviar todas as mensagens:', error);
            socket.emit('erroProcessamento', { mensagem: 'Erro ao enviar todas as mensagens' });
        }
        
        socket.on('novaMensagem', async novaMensagem => {
            try {
                const resposta = await rotaDeMensagem(novaMensagem);
                console.log(resposta);
            } catch (error) {
                console.error('Erro ao processar nova mensagem:', error);
                // Emitir um evento de erro para o cliente, se necessário
                socket.emit('erroProcessamento', { mensagem: 'Erro ao processar nova mensagem' });
            }
        });
        
 
        socket.on('disconnect', desconnect => {
            console.log('conectão perdida', socket.id)
        })
    })
})
.catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
});
