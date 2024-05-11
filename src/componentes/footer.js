import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import {Routes, Route, Link} from 'react-router-dom';
import Contato from '../componentes/contato';
import Projetos from '../componentes/projetos';

export default function Footer() {
    return(
    <>
    <footer>
        <section className={styles.redesSociais}>
            <h2>Redes Sociais</h2>
            <FontAwesomeIcon icon={faLinkedin} className={`${styles.icon} ${styles.linkedin}`}/>
            <FontAwesomeIcon icon={faSquareGithub} className={`${styles.icon} ${styles.github}`}/>

        </section>
        <section className={styles.siteMap}>
        <Link to='/contato' className={styles.link}>Entre em contato comigo</Link>
        <Link to='/projetos' className={styles.link}>Meus projetos</Link>

        <Routes>
            <Route path='/contato' element={<Contato/>}/>
            <Route path='/contato' element={<Projetos/>}/>
        </Routes>
        </section>
        <section>
            <p>Email: juliaa.brito22@gmail.com</p>
        </section>
    </footer>
    </>
    );
  }