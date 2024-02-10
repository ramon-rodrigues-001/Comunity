import styles from "./ChatPv.module.scss"

export default function ChatPv() {
    return (
        <div className={styles.containerChat}>
            <h1 className={styles.h1}>Chat</h1>
            
            <div className={styles.my}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi sed eveniet et autem exercitationem id iusto, velit hic laborum sapiente fugiat ipsum repudiandae. Atque odio dolore quae accusamus debitis esse?
            </div>

            <div className={styles.you}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi sed eveniet et autem exercitationem id iusto, velit hic laborum sapiente fugiat ipsum repudiandae. Atque odio dolore quae accusamus debitis esse?
            </div>
        </div>
    )
}