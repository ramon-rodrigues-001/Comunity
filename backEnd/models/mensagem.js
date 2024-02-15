const mongoose = require('mongoose')

const mensagemSchema = mongoose.Schema({
    mensagem: {
        type: String,
        required: true
    }
})

const Mensagem = mongoose.model('Mensagen', mensagemSchema)
module.exports = Mensagem
