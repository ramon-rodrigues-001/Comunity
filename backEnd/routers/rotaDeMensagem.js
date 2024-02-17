const mensagemModel = require('../models/mensagem.js')


async function salvarMensagemNoBancoDeDados( mensagem ) {
    try {
        if (!mensagem) return 'Mensagem inválida'
        const novaMensagem = new mensagemModel({ mensagem });
        await novaMensagem.save();
        return novaMensagem;
    } catch (error) {
        console.error('Erro ao salvar a mensagem:', error);
        throw error;
    }
}

module.exports = salvarMensagemNoBancoDeDados()