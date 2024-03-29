const mensagemModel = require('../models/mensagem.js');
// const express = require('express')

// const router = express.Router()


// router.post('/api/mensagem', async (req, res) => {
//     const {mensagemEnviada} = req.body

//     if (!mensagemEnviada) return res.status(400).json({ error: 'Mensagem inválida' });

//     const newMensagem = new mensagemModel({
//         mensagem: mensagemEnviada
//     })


//     try {
//         await newMensagem.save();
//         res.sendStatus(200);
//     } catch (error) {
//         console.log('===== Erro ao enviar mensagem (erro de codigo) =====', error);
//         res.status(500).json({ error: 'Erro ao salvar a mensagem' });
//     }
// })

// module.exports = router


module.exports = async function rotaDeMensagem(mensagemEnviada) {
    if (!mensagemEnviada) return console.log('Erro mensagem enviada não e valida');

    const newMensagem = new mensagemModel({
        mensagem: mensagemEnviada
    })


    try {
        newMensagem.save();
        const mensagensSalvas = await mensagemModel.find();
        return await mensagensSalvas;
    } catch (error) {
        console.log('===== Erro ao enviar mensagem (erro de codigo) =====', error);
        return console.log('Erro ao salvar a mensagem');
    }
}

// module.exports = rotaDeMensagem