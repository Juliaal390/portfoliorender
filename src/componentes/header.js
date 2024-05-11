import styles from './header.module.css';
import Projetos from './projetos';
import Contato from './contato';
import Home from './home';
import {Routes, Route, Link} from 'react-router-dom';
import Seta from '../imagens/seta.png'
import { useEffect, useRef } from 'react';

export default function Header() {

    const homeRef = useRef();

    useEffect(()=>{
      homeRef.current.click(); //simula um click ao carregar a página
    })

    const alterarSeta=(link)=>{
      const click = link.target.textContent;
      const getSeta = document.getElementById('setaImg');

      switch(click){
        case 'HOME':{
          getSeta.style.left='11ch';
          break;
        }
        case 'MEUS PROJETOS':{
          getSeta.style.left='30ch';
          break;
        }
        default :{
          getSeta.style.left='50.5ch';
          break;
        }
      }
      
    }
    return (
      <>
      <header>
      <menu>
        <Link to='/home' onClick={alterarSeta} className={styles.link} ref={homeRef}>HOME</Link>
        <Link to='/projetos' onClick={alterarSeta} className={styles.link}>MEUS PROJETOS</Link>
        <Link to='/contato' onClick={alterarSeta} className={styles.link}>CONTATO</Link>
      </menu>

      
      <div className={styles.seta}><img id='setaImg' className={styles.setaImg} src={Seta}/></div>
      
      </header>

      <Routes>
      <Route path='/home' element={<Home/>}/>
        <Route path='/projetos' element={<Projetos/>}/>
        <Route path='/contato' element={<Contato/>}/>
      </Routes>

      </>
    );
  }