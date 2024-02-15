import styles from "./ChatPv.module.scss"

export default function ChatPv(props) {
    const tema = props.tema


    const handleInput = (event) => {
        const inputArea = event.currentTarget;
        inputArea.style.height = 'auto'; // Redefine a altura do textarea para permitir que ele se expanda
        inputArea.style.height = inputArea.scrollHeight + 'px'; // Define a altura do textarea com base no tamanho do conteúdo
    }

    const handleNewMensagem = async (event) => {
        event.preventDefault()
        const mensagemEnviada = event.target.mensagem.value


        try {
            const response = await fetch("http://localhost:4000/api/mensagem", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({mensagemEnviada}),
            });
      
            if (response.status === 200) {
              alert("MSG Enviado")
            } 
            // else {
            //     const responseData = await response.json()
                
            //     if (responseData.message === "o apelido do usuário já existe") {
            //         alert('Apelido repetido')
            //     }
            //     else if (responseData.message === "o email do usuário já existe") {
            //         alert('Email repetido')
            //     }
            //     else if (responseData.message === "requisito minimo de caracteres") {
            //         alert('Senha sem requisito minimo de caracteres')
            //     }
            //     else {
            //         alert('Erro desconhecido')
            //     }
            // }
        } 
        catch (error) {
            console.error("Erro ao enviar mensagem:", error);
        }
    }


    return (
        <>
        <div className={styles.containerChat} id={tema == 'Escuro' ? styles.temaDark : null}>
            <h3 className={styles.h1}>Chat privado com Ramon</h3>
            
            <div className={styles.chat}>
                <div className={styles.msg} id={styles.voce}>
                    <h4>You</h4>
                    <p>Oi, Tudo Bem?</p>
                </div>
                
                <div className={styles.msg} id={styles.amigo}>
                    <h4>Ramon</h4>
                    <p>Olá, Tudo bem?</p>
                </div>

                <div className={styles.msg} id={styles.amigo}>
                    <h4>Ramon</h4>
                    <p>Olá, tudo bem? Seja bem vindo a Comunity uma plataforma de comunicação, no momento estamos em versão beta, e ainda estou desenvolvendo e aplimorando este espaço de comunicação.</p>
                </div>
                
                <div className={styles.msg} id={styles.amigo}>
                    <h4>Ramon</h4>
                    <p>Você esta neste momento no chat em privado comigo "criador do app"</p>
                </div>
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