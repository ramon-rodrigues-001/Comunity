import styles from "./ChatPv.module.scss"

export default function ChatPv(props) {
    const tema = props.tema


    return (
        <div className={styles.containerChat} id={tema == 'Escuro' ? styles.temaDark : null}>
            <h1 className={styles.h1}>Chat</h1>
            
            <div className={styles.chat}>
                <div className={styles.msg} id={styles.voce}>
                    <h4>You</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi sed eveniet et autem exercitationem id iusto, velit hic laborum sapiente fugiat ipsum repudiandae. Atque odio dolore quae accusamus debitis esse?</p>
                </div>
                <div className={styles.msg} id={styles.amigo}>
                    <h4>Ramon</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi sed eveniet et autem exercitationem id iusto, velit hic laborum sapiente fugiat ipsum repudiandae. Atque odio dolore quae accusamus debitis esse?</p>
                </div>









                <div className={styles.msg} id={styles.voce}>
                    <h4>You</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit?</p>
                </div>
                <div className={styles.msg} id={styles.amigo}>
                    <h4>Ramon</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi sed eveniet et autem exercitationem id?</p>
                </div><div className={styles.msg} id={styles.voce}>
                    <h4>You</h4>
                    <p>Lorem</p>
                </div>
                <div className={styles.msg} id={styles.amigo}>
                    <h4>Ramon</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi sed eveniet et autem exercitationem id iusto,</p>
                </div><div className={styles.msg} id={styles.voce}>
                    <h4>You</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi sed eveniet et autem exercitationem id iusto, velit hic laborum sapiente fugiat ipsum repudiandae. Atque odio dolore quae accusamus debitis esse?</p>
                </div>
            </div>
        </div>
    )
}