import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './styles/App.module.scss'

import Header from './components/aplicativo/common/header/Header'
import Aside from './components/aplicativo/common/aside/Aside'
import Discontrair from './components/aplicativo/pages/discontrair/Discontrair'
import BatePapo from './components/aplicativo/pages/bate_papo/BatePapo';
import Noticias from './components/aplicativo/pages/noticias/Noticias';
import Perfil from './components/aplicativo/pages/perfil/Perfil';
import Login from './components/aplicativo/pages/perfil/login/Login';
import Register from './components/aplicativo/pages/perfil/register/Register';
import { useEffect, useState } from 'react';


export default function App() {
    let temaSalvo = localStorage.getItem('temaAtual');
    const [tema, setTema] = useState(temaSalvo)
    const [loading, setLoading] = useState(true)


    // SISTEMA DE MUDAR TEMA ESCURO/CLARO
    const mudarTema = () => {
        if (tema === null) {
            localStorage.setItem('temaAtual', 'Escuro');
            temaSalvo = localStorage.getItem('temaAtual');
            setTema(temaSalvo)
        }
        else {
            temaSalvo === 'Claro' ? localStorage.setItem('temaAtual', 'Escuro') : localStorage.setItem('temaAtual', 'Claro')
            temaSalvo = localStorage.getItem('temaAtual');
            setTema(temaSalvo)
        }
    }



    //======= SISTEMA DE PRE-LOAD-LOADING =======
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLoading(false);
        }, 2000);
    
        return () => clearTimeout(timeoutId);
      }, []);
    const setLoad = () => {
        return setLoading(false)
    }


    return (
        <>
        {/* ANIMAÇÃO DE PRE-LOADING */}
        {loading ? (
            <div className={styles.preload}>
                <div className={styles.cube}>
                <div className={styles.top}></div>
                <span style={{ '--i': 0 }}></span>
                <span style={{ '--i': 1 }}></span>
                <span style={{ '--i': 2 }}></span>
                <span style={{ '--i': 3 }}></span>
                </div>
            </div>
        ) : (
            // ROTAS E PAGINAS
            <div className={styles.container} id={tema === 'Escuro' ? styles.containerDark : null}>
            < Header mudarTema={mudarTema} tema={tema}/>
                <main className={styles.main} onLoad={setLoad}>
                    <div className={styles.containerAsideDaEsquerda}>
                        < Aside /> 
                    </div>
                    <div className={styles.containerVitrineDaDireita}>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={
                                    < Discontrair tema={tema}/>
                                }/>
                                
                                <Route path="/batePapo" element={
                                    < BatePapo />
                                }/>

                                <Route path="/noticias" element={
                                    < Noticias tema={tema} />
                                }/>

                                <Route path="/perfil" element={
                                    < Perfil />
                                }/>

                                <Route path="/perfil/login" element={
                                    < Login tema={tema} />
                                } />

                                <Route path="/perfil/register" element={
                                    < Register tema={tema} />
                                } />
                            </Routes>
                        </BrowserRouter>
                    </div>
                </main>
            </div>
        )}




        
    </>
    )
}
