import styles from "./Discontrair.module.scss"

function Discontrair(props) {
  const tema = props.tema
  console.log(tema)

  return (
    <div className={styles.discontrair} id={tema === 'Escuro' ? styles.temaDark : null}>
        <div className={styles.background}>
            <div className={styles.card_header}>
              <h2>Welcome! à nossa Plataforma de Comunidade!, Capelinha</h2> 
            </div><br />

            <div className={styles.container_De_Posts}>
              <div>
                <div className={styles.post}>
                  <p className={styles.tipoDePublication}>ADM</p>
                  <div className={styles.perfilDoPublicador}>
                    <div className={styles.imgDePerfil}></div>
                
                    <div>
                      <p className={styles.nomeDoUsuario}>Ramon Rodrigues</p>
                      <p className={styles.dataDePublication}>10/05/23</p>
                    </div>
                  </div>
                  <div className={styles.descrition}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam tenetur temporibus expedita in illo beatae dignissimos nulla adipisci fugiat, praesentium ipsa, quisquam error iste nemo itaque aliquam totam numquam ratione!
                  </div>
                  <img src="/background-home.jpg" alt="background-home" className={styles.img_background}/>
                </div>
                <div className={styles.post}>
                  <div className={styles.perfilDoPublicador}>
                    <div className={styles.imgDePerfil}></div>
                
                    <div>
                      <p className={styles.nomeDoUsuario}>Ramon Rodrigues</p>
                      <p className={styles.dataDePublication}>10/01/22</p>
                    </div>
                  </div>
                  <div className={styles.descrition}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam tenetur temporibus expedita in illo beatae dignissimos nulla adipisci fugiat, praesentium ipsa, quisquam error iste nemo itaque aliquam totam numquam ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nobis laborum eaque enim debitis officiis, id culpa animi, totam esse vel nulla perferendis, odio dolore ullam ipsa aspernatur unde tempore?
                  </div>
                  <img src="https://tse4.mm.bing.net/th?id=OIP.QFt-RNnVZR_e3cUf3uUknwHaEK&pid=Api&P=0&h=180" alt="background-home" className={styles.img_background}/>
                </div>
              </div>

              <div className={styles.container_anuncios}>
                <div className={styles.anuncios}>
                  <p className={styles.tipoDePublication}>Padrocinado</p>
                  Vazio
                </div>
                <div className={styles.anuncios} id={styles.anuncio_2}>
                  <p className={styles.tipoDePublication}>Padrocinado</p>
                  Vazio
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Discontrair
