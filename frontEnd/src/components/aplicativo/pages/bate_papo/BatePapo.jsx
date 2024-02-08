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

          <div className={styles.nav_item} id={styles.direita}>
            <i class="bi bi-plus-lg"></i>
            Descobrir
          </div>
      </div>

      <div className={styles.containerDeCardsDeGrupos}>
        <div className={styles.cardDeGrupos}>Aqui ficara os grupos</div>
        <div className={styles.cardDeGrupos}>Vazio</div>
        <div className={styles.cardDeGrupos}>Vazio</div>
        <div className={styles.cardDeGrupos}>Vazio</div>
      </div>
    </section>
  )
}

export default BatePapo