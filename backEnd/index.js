const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');


const registerRouter = require('./routers/register');
const loginRouter = require('./routers/login');
const {salvarMensagemNoBancoDeDados} = require('./routers/rotaDeMensagem.js');


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



// Configurações do Socket.IO
io.on('connection', (socket) => {
    console.log('Nova conexão de socket estabelecida', socket.id);

    socket.on('enviarMensagem', async (mensagem) => {
        try {
            // Salvar a mensagem no banco de dados
            const novaMensagemSalva = await salvarMensagemNoBancoDeDados(mensagem);
            console.log('mensagem salva', socket.id);
            
            // Emitir a mensagem para todos os clientes conectados
            io.emit('novaMensagem', novaMensagemSalva);
        } catch (error) {
            console.error('Erro ao salvar a mensagem:', error);
        }
    });
});



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
})
.catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
});
