import styles from "./Aside.module.scss"

function Aside(props) {

  const taDentroDoMenu = props.taDentroDoMenu

  return (
    <div className={styles.aside} id={taDentroDoMenu && [styles.dentroDoMenu]}>
      <h2>Seus Amigos</h2>

      <div className={styles.containerInputPrucurarPorAmigo}>
        <i class="bi bi-search" id={styles.iconeLupa}></i>
        <input type="text" className={styles.inputPrucurarPorAmigo} />
      </div>

      <button className={styles.buttonAdicionarNovoAmigo}>
        <i class="bi bi-plus-lg"></i> New Amigo 
      </button>

      <div className={styles.cardsAmigos}>
        Ramon
        <div className={styles.informationsAmigo}>
          <span className={styles.spanOffOn}></span>
          <i class="bi bi-pencil-fill"></i>
          <span>4</span>
        </div>
      </div>

      <div className={styles.cardsAmigos}>
        Davi
        <div className={styles.informationsAmigo}>
          <span className={styles.spanOffOn}></span>
          <i class="bi bi-pencil-fill"></i>
          <span>1</span>
        </div>
      </div>

      <div className={styles.cardsAmigos}>
        Maria
        <div className={styles.informationsAmigo}>
          <span className={styles.spanOffOn}></span>
          <i class="bi bi-pencil-fill"></i>
          <span>1</span>
        </div>
      </div>

      <div className={styles.cardsAmigos}>
        Lucas
        <div  className={styles.informationsAmigo}>
          <span className={styles.spanOffOn}></span>
          <i class="bi bi-pencil-fill"></i>
          <span>0</span>
        </div>
      </div>

      <div className={styles.cardsAmigos}>
        Ray
        <div className={styles.informationsAmigo}>
          <span className={styles.spanOffOn}></span>
          <i class="bi bi-pencil-fill"></i>
          <span>0</span>
        </div>
      </div>
      
      <div className={styles.cardsAmigos}>
        Ray
        <div className={styles.informationsAmigo}>
          <span className={styles.spanOffOn}></span>
          <i class="bi bi-pencil-fill"></i>
          <span>0</span>
        </div>
      </div>
      
      <div className={styles.cardsAmigos}>
        Ray
        <div className={styles.informationsAmigo}>
          <span className={styles.spanOffOn}></span>
          <i class="bi bi-pencil-fill"></i>
          <span>0</span>
        </div>
      </div>
      
      <div className={styles.cardsAmigos}>
        Ray
        <div className={styles.informationsAmigo}>
          <span className={styles.spanOffOn}></span>
          <i class="bi bi-pencil-fill"></i>
          <span>0</span>
        </div>
      </div>

      <div className={styles.cardsAmigos}>
        LOREN IP ...
        <div className={styles.informationsAmigo}>
          <span className={styles.spanOffOn}></span>
          <i class="bi bi-pencil-fill"></i>
          <span>0</span>
        </div>
      </div>
    </div>
  )
}

export default Aside
