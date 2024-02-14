import styles from "./ChatPv.module.scss"

export default function ChatPv(props) {
    const tema = props.tema



    const handleInput = (event) => {
        const inputArea = event.currentTarget;
        inputArea.style.height = 'auto'; // Redefine a altura do textarea para permitir que ele se expanda
        inputArea.style.height = inputArea.scrollHeight + 'px'; // Define a altura do textarea com base no tamanho do conteúdo
    }


    return (
        <>
        <div className={styles.containerChat} id={tema == 'Escuro' ? styles.temaDark : null}>
            <h1 className={styles.h1}>Chat</h1>
            
            <div className={styles.chat}>
                <div className={styles.msg} id={styles.voce}>
                    <h4>You</h4>
                    <p>Oi, Tudo Bem?</p>
                </div>
                
                <div className={styles.msg} id={styles.amigo}>
                    <h4>Ramon</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi sed eveniet et autem exercitationem id iusto, velit hic laborum sapiente fugiat ipsum repudiandae. Atque odio dolore quae accusamus debitis esse?</p>
                </div>



                <div className={styles.msg} id={styles.voce}>
                    <h4>You</h4>
                    <p>Oi, Tudo Bem?</p>
                </div>
                
                <div className={styles.msg} id={styles.amigo}>
                    <h4>Ramon</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi sed eveniet et autem exercitationem id iusto, velit hic laborum sapiente fugiat ipsum repudiandae. Atque odio dolore quae accusamus debitis esse?</p>
                </div><div className={styles.msg} id={styles.voce}>
                    <h4>You</h4>
                    <p>Oi, Tudo Bem?</p>
                </div>
                
                <div className={styles.msg} id={styles.amigo}>
                    <h4>Ramon</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi sed eveniet et autem exercitationem id iusto, velit hic laborum sapiente fugiat ipsum repudiandae. Atque odio dolore quae accusamus debitis esse?</p>
                </div>
            </div>


            
        </div>



        <div className={styles.inputDeMensagem}>
                <textarea
                    autoFocus
                    rows="1"
                    className={styles.textarea}
                    onInput={handleInput}
                    placeholder="Enviar mensagem..."
                />
                <button><i class="bi bi-send-fill"></i></button>
            </div>
        </>
    )
}