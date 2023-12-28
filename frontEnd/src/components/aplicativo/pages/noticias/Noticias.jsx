import styles from "./Noticias.module.scss"

function Noticias(props) {
  const tema = props.tema

  return (
    <div className={styles.divNoticias} id={tema === 'Escuro' ? styles.temaDark : null}>
      <h1>Noticias</h1>

      <div className={styles.containerDeNoticias}>
        <a href="https://g1.globo.com/economia/noticia/2023/12/28/ipva-2024-veja-calendario-de-pagamento-nos-estados-e-df.ghtml" target="_brank" className={styles.noticias}>
          <img src="https://images.pexels.com/photos/1445653/pexels-photo-1445653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Carros" />
          
          <div>
            <h2>IPVA 2024: veja calendário de pagamento nos estados e DF</h2>
            <p>Pagamento é obrigatório, e a alíquota varia conforme o modelo e a idade do veículo.</p>
          </div>
        </a>



        <a href="https://g1.globo.com/mg/minas-gerais/noticia/2023/12/27/entenda-tarifa-de-onibus-em-belo-horizonte.ghtml" target="_brank" className={styles.noticias}>
          <img src="https://images.pexels.com/photos/808700/pexels-photo-808700.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Passageiros em um onibus" />
          
          <div>
            <h2>entenda como a tarifa de ônibus chegou a R$ 5,25 em Belo Horizonte</h2>
            <p>Reajuste de 16,6% será aplicado a partir da próxima sexta-feira (29). Valor de referência vai subir de R$ 4,50 para R$ 5,25 na capital.</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Noticias
