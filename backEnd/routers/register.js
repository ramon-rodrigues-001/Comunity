const user = require('../models/user.js')
const express = require('express')
const router = express.Router()


router.post("/api/register", async (req, res) => { 
    const { username, email, password } = req.body;
    let userExist = false

    await user.find().then(usuarios => {

        usuarios.forEach(usuario => {
            if (username === usuario.nome) {
                userExist = true
                res.status(409).json({ message: "o apelido do usuário já existe" });
            }
            else if (email === usuario.email) {
                userExist = true
                res.status(409).json({ message: "o email do usuário já existe" });
            }
            else if (password.length < 8) {
                userExist = true
                res.status(400).json({ message: "requisito minimo de caracteres" });
            }
        })

        if (userExist === false) {
            const newUser = new user({ 
                nome: username, 
                email: email, 
                senha: password 
            })
            try {
                newUser.save()
                res.sendStatus(200);
            }
            catch {
                console.log('===== Erro ao salvar usuario =====')
            }
        }
    })
});

module.exports = router