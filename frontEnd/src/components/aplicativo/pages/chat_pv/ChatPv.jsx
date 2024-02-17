import { useState, useEffect } from "react";
import styles from "./ChatPv.module.scss"

import io from 'socket.io-client';
const socket = io('http://localhost:4000');

export default function ChatPv(props) {
    const tema = props.tema
    const [historico_de_mensagem, setHistorico_de_mensagem] = useState([])


    // ==== Para mudar o tamanho do input de messagem ====
    const handleInput = (event) => {
        const inputArea = event.currentTarget;
        inputArea.style.height = 'auto';
        inputArea.style.height = inputArea.scrollHeight + 'px';
    }


    // useEffect(() => {
    //     // Conectar-se ao servidor Socket.IO
    //     socket.on('connect', () => {
    //         console.log('Conectado ao servidor Socket.IO');
    //     });

    //     // Lidar com a recepção de novas mensagens
    //     socket.on('novaMensagem', (mensagem) => {
    //         setHistorico_de_mensagem([...historico_de_mensagem, mensagem]);
    //     });

    //     return () => {
    //         socket.disconnect(); // Desconectar-se do servidor Socket.IO ao desmontar o componente
    //     };
    // }, [historico_de_mensagem]);


    // ==== Salvar a mensagem no banco de dados MongoDB ====
    const handleNewMensagem = async (event) => {
        event.preventDefault()
        
        const mensagemEnviada = event.target.mensagem.value
        event.target.mensagem.value = ''

        try {
            const response = await fetch("http://localhost:4000/api/mensagem", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({mensagemEnviada}),
            });
        } 
        catch (error) {
            console.error("Erro ao enviar mensagem:", error);
        }
    }



    // ==== Buscar as mensagens salvas no banco de dados ====
    //   const buscarDados = async () => {
    //     try {
    //       const resposta = await fetch('http://localhost:4000/api/pegarMensagens');
    //       const dadosJson = await resposta.json(); // Converte a resposta para JSON
    //       setHistorico_de_mensagem(dadosJson)
    //     } catch (erro) {
    //       console.error('Erro ao buscar os dados:', erro);
    //     } 
    //   }; 
      
    // useEffect(() => {
    //     const intervalo = setInterval(buscarDados, 5000);
    //     return () => clearInterval(intervalo);
    //   }, []);




    return (
        <>
        <div className={styles.containerChat} id={tema == 'Escuro' ? styles.temaDark :null}>
            <h3 className={styles.h1}>Chat privado com Ramon</h3>
            
            <div className={styles.chat}>


                {historico_de_mensagem.map(item => (
                    <div className={styles.msg} id={styles.voce} key={item._id}>
                        <h4>You</h4>
                        <p>{item.mensagem}</p>
                    </div>
                ))}


                {/* <div className={styles.msg} id={styles.amigo}>
                    <h4>Ramon</h4>
                    <p>Olá, tudo bem? Seja bem vindo a Comunity uma plataforma de comunicação, no momento estamos em versão beta, e ainda estou desenvolvendo e aplimorando este espaço de comunicação.</p>
                </div> */}
                
            </div>
        </div>



        <form action="" className={styles.inputDeMensagem} onSubmit={handleNewMensagem}>
            <textarea
                autoFocus
                rows="1"
                name="mensagem"
                className={styles.textarea}
                onInput={handleInput}
                placeholder="Enviar mensagem..."
            />
            <button type="submit"><i class="bi bi-send-fill"></i></button>
        </form>
        </>
    )
}