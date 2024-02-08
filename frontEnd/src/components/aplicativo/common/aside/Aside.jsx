import styles from "./Aside.module.scss"

function Aside(props) {
  const taDentroDoMenu = props.taDentroDoMenu

  const newAmigo = () => {
    const containerDeAmigos = document.querySelector('.containerDeAmigos')

    const cardsAmigos = document.createElement('div')
    cardsAmigos.className = styles.cardsAmigos
    
    const nome = document.createElement('p')
    const nomeDoAmigo = prompt('Nome do novo amigo: ')
    nome.innerHTML = nomeDoAmigo ? nomeDoAmigo : 'Amigo' 

    const informationsAmigo = document.createElement('div')
    informationsAmigo.className = styles.informationsAmigo

    const spanOffOn = document.createElement('span')
    spanOffOn.className = styles.spanOffOn

    const iconeLapis = document.createElement('i')
    iconeLapis.className = "bi bi-pencil-fill"
    iconeLapis.addEventListener('click', mudarNome)
    
    const spanNotification = document.createElement('span')
    spanNotification.innerHTML = 0
    spanNotification.className = styles.spanMsg

    informationsAmigo.appendChild(spanOffOn)
    informationsAmigo.appendChild(iconeLapis)
    informationsAmigo.appendChild(spanNotification)

    cardsAmigos.appendChild(nome)
    cardsAmigos.appendChild(informationsAmigo)

    containerDeAmigos.appendChild(cardsAmigos)
  }




  const mudarNome = (event) => {
    const elemento = event.target.parentNode.parentNode.firstElementChild
    const newNome = prompt('nome: ')

    newNome ? elemento.innerHTML = newNome : null
    console.log(elemento)
  }



  return (
    <div className={styles.aside} id={taDentroDoMenu && [styles.dentroDoMenu]}>
      <h2>Contatos</h2>

      <div className={styles.containerInputPrucurarPorAmigo}>
        <i class="bi bi-search" id={styles.iconeLupa}></i>
        <input type="text" className={styles.inputPrucurarPorAmigo} />
      </div>

      <button className={styles.buttonAdicionarNovoAmigo} onClick={newAmigo}>
        <i class="bi bi-plus-lg"></i> New Amigo 
      </button>

      <div className='containerDeAmigos'>
        <div className={styles.cardsAmigos}>
          <p>Ramon</p>
          <div className={styles.informationsAmigo}>
            <span className={styles.spanOffOn}></span>
            <i class="bi bi-pencil-fill" onClick={mudarNome}></i>
            <span className={styles.spanMsg}>4</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aside
