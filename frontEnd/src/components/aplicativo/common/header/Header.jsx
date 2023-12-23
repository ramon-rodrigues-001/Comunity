// import { Link } from "react-router-dom"
import styles from "./Header.module.scss"
import { useState } from "react"

// importando o menu hamburguer
import Menu from "./menu/Menu"

function Header(props) {
  const [menuActive, setMenuActive] = useState(false)
  const {mudarTema, tema} = props

  const setMenu = () => {
    setMenuActive(!menuActive)
  }

  return (
    <header id={tema === 'Escuro' ? styles.temaDark : null}>
        <h1>Comunity</h1>
        <ul>
          <li id={styles.discontrair}>
            <a href="/"><i class="bi bi-cup-hot-fill"></i></a>
          </li>
          <li id={styles.batePapo}>
            <a href="/batePapo"><i class="bi bi-people-fill"></i></a>
          </li>
          <li id={styles.noticias}>
            <a href="/noticias"><i class="bi bi-newspaper"></i></a>
          </li>
          
          <li id={styles.mudarTema} onClick={mudarTema}>
            <i class="bi bi-brightness-high-fill"></i>
          </li>
        </ul>

        <div>
          <ul>
            <li id={styles.bell}>
              <i class="bi bi-bell-fill"></i>
            </li>
            <li id={styles.perfil}>
              <a href="/perfil"><i class="bi bi-person-fill"></i></a>
            </li>
          </ul>
        </div>


        <div className={styles.containerMenu}>
          <button className={styles.btnOpenMenu} onClick={setMenu}>
            <i class="bi bi-three-dots"></i>
          </button>

          {menuActive && (
            < Menu setMenu={setMenu} />
          )}
        </div>
    </header>
  )
}

export default Header
