import { useState } from 'react'
import styles from './Menu.module.scss'
import Aside from '../../aside/Aside'

function Menu(props) {
    const {setMenu, mudarTema} = props
    const [opitionsAmigos, setOpitionsAmigos] = useState(false)

    const setSteteAmigos = () => {
        setOpitionsAmigos(!opitionsAmigos)
        return
    }

  return (
    <div className={styles.menu}>
        <div className={styles.headerMenu}>
            <h3>Menu Lateral</h3>
            <button className={styles.btnOpenMenu} onClick={setMenu}>
                <i class="bi bi-x"></i>
            </button>
        </div>
        <div className={styles.bodyMenu}>
            <div className={styles.navIconesMenu}>
                <a href="/" ><i class="bi bi-cup-hot-fill"></i></a>
                <a href="/batePapo"><i class="bi bi-people-fill"></i></a>
                <a href="/noticias"><i class="bi bi-newspaper"></i></a>
                <a href="/perfil"><i class="bi bi-person-fill"></i></a>
                <a href="#" onClick={mudarTema}><i class="bi bi-brightness-high-fill"></i></a>
            </div>


            


            {/* Abrir menu de amigos */}
            <button className={styles.btnOptions} onClick={setSteteAmigos}>
                Amigos
                {!opitionsAmigos && [
                    <i class="bi bi-caret-down"></i> 
                ]}
                {opitionsAmigos && [
                    <i class="bi bi-caret-up"></i> 
                ]}
            </button>
            {/* Menu de amigos do menu */}
            {opitionsAmigos && [
                < Aside 
                    taDentroDoMenu = {true}
                />
            ]}

        </div>
    </div>
  )
}

export default Menu
