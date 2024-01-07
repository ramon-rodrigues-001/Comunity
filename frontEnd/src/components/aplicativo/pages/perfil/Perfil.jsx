import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./login/Login"
import Register from "./register/Register"
import styles from "./Perfil.module.scss"

function Perfil() {
    const situacao_de_localStorage = localStorage.getItem('login')
    const [situacao, setSituacao] = useState(situacao_de_localStorage)

    setTimeout(function() {
        if (situacao == null) {
            localStorage.setItem('login', 'Deslogado')
            const situacao_de_localStorage = localStorage.getItem('login')
            setSituacao(situacao_de_localStorage)
        }
    }, 0);


    return (
        situacao === 'Deslogado' ? (
            <Navigate to="login/" />
        ) : (
            <h1>Logado</h1>
        )
    )
}

export default Perfil
