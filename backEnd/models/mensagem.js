const mongoose = require('mongoose')

const mensagemSchema = mongoose.Schema({
    type: String,
    required: true
})