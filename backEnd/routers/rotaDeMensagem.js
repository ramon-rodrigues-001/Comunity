const mensagem = require('../models/mensagem.js')
const express = require('express')
const router = express.Router()

router.post('/api/mensagem', async (req, res) => {
    const {mensagemEnviada} = req.body

    if (mensagemEnviada === '' || null) return alert('Cadé a msg amigão')

    const newMensagem = new mensagem({
        mensagem: mensagemEnviada
    })
    try {
        newMensagem.save()
        res.sendStatus(200);
    }
    catch {
        console.log('===== Erro ao enviar mensagem (erro de codigo) =====')
    }
})
 
module.exports = router