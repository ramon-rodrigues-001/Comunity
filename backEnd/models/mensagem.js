const mongoose = require('mongoose')

const mensagemSchema = mongoose.Schema({
    mensagem: {
        type: String,
        required: true
    }
})

const mensagemModel = mongoose.model('Mensagen', mensagemSchema)
module.exports = mensagemModel
