import styles from "./BatePapo.module.scss"

function BatePapo() {
  return (
    <section className={styles.SectionBatePapo}>
      <div className={styles.navbar}>
          <div className={styles.nav_item}>
            <i class="bi bi-plus-square-dotted"></i>
            Criar Gropo
          </div>

          <div className={styles.center_button}>
            <a href='#'>Amigos</a>  
          </div>

          <div className={styles.nav_item}>
            <i class="bi bi-plus-lg"></i>
            Achar Grupo
          </div>
      </div>

      <div className={styles.containerDeCardsDeGrupos}>
        <div className={styles.cardDeGrupos}></div>
        <div className={styles.cardDeGrupos}></div>
        <div className={styles.cardDeGrupos}></div>
        <div className={styles.cardDeGrupos}></div>
      </div>
    </section>
  )
}

export default BatePapo