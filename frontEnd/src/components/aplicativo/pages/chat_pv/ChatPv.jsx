import { useState, useEffect } from "react";
import styles from "./ChatPv.module.scss"

import io from 'socket.io-client';
const socket = io('http://localhost:4000');

export default function ChatPv(props) {
    const tema = props.tema
    const [historico_de_mensagem, setHistorico_de_mensagem] = useState(() => {
        const chatSalvo = localStorage.getItem('chat');
        return chatSalvo ? JSON.parse(chatSalvo) : [];
        // return localStorage.getItem('chat')
    });
    console.log(localStorage.getItem('chat'))


    // ==== Para mudar o tamanho do input de messagem ====
    const handleInput = (event) => {
        const inputArea = event.currentTarget;
        inputArea.style.height = 'auto';
        inputArea.style.height = inputArea.scrollHeight + 'px'; 
    }


    useEffect(() => { 
        socket.on('connect', () => {
            console.log('Conectado ao servidor Socket.IO');
        });
        
        return () => {
            socket.off('connect');
        }; 
    }, []);

    

    socket.on('respostaMensagem', (resposta) => {
        console.log('Resposta do servidor:', resposta);
        const listaDeMensagem = resposta.map(item => item.mensagem);
        localStorage.setItem('chat', JSON.stringify(listaDeMensagem));
        
        setHistorico_de_mensagem(localStorage.getItem('chat'));
    });
    
 
    


    // ==== Salvar a mensagem no banco de dados MongoDB ====
    const handleNewMensagem = async (event) => {        
        event.preventDefault()
        
        const mensagemEnviada = event.target.mensagem.value
        event.target.mensagem.value = ''

        socket.emit('novaMensagem', mensagemEnviada)

    }




    return (
        <>
        <div className={styles.containerChat} id={tema == 'Escuro' ? styles.temaDark :null}>
            <h3 className={styles.h1}>Chat privado com Ramon</h3>
            
            <div className={styles.chat}>

                {historico_de_mensagem.map(item => (
                    <>
                    <div className={styles.msg} id={styles.voce}>
                        <h4>You</h4>
                        <p>{item}</p>
                    </div>
                    <div className={styles.msg} id={styles.amigo}>
                    <h4>Ramon</h4>
                    <p>Olá, tudo bem? Seja bem vindo a Comunity uma plataforma de comunicação, no momento estamos em versão beta, e ainda estou desenvolvendo e aplimorando este espaço de comunicação.</p>
                </div>
                    </>
                ))}


                
                
            </div>
        </div>



        <form action="" className={styles.inputDeMensagem} onSubmit={(e) => handleNewMensagem(e)}>
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