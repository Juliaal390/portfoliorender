import styles from './header.module.css';
import Projetos from './projetos';
import Contato from './contato';
import Home from './home';
import { Routes, Route, Link } from 'react-router-dom';
import Seta from '../imagens/seta.png';
import { useContext } from 'react'; // Removido useState e useEffect
import { LinkagemContext } from '../context/linkagem';

export default function Header() {
  const { setPagina } = useContext(LinkagemContext);

  return (
    <>
      <header>
        <menu>
          <Link to='/home' onClick={() => setPagina('home')} className={styles.link}>HOME</Link>
          <Link to='/projetos' onClick={() => setPagina('projetos')} className={styles.link}>MEUS PROJETOS</Link>
          <Link to='/contato' onClick={() => setPagina('contato')} className={styles.link}>CONTATO</Link>
        </menu>
        <div className={styles.seta}><img id='setaImg' className={styles.setaImg} src={Seta} alt="Seta" /></div>
      </header>

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/projetos' element={<Projetos />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
    </>
  );
}
