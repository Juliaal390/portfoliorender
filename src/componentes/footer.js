import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { LinkagemContext } from '../context/linkagem';

export default function Footer() {
    const { setPagina } = useContext(LinkagemContext);
    return(
    <>
    <footer>
        <section className={styles.redesSociais}>
            <h2>Redes Sociais</h2>
            <FontAwesomeIcon icon={faLinkedin} className={`${styles.icon} ${styles.linkedin}`}/>
            <FontAwesomeIcon icon={faSquareGithub} className={`${styles.icon} ${styles.github}`}/>

        </section>
        <section className={styles.siteMap}>
        <Link to='/contato' onClick={() => setPagina('contato')} className={styles.link}>Entre em contato comigo</Link>
        <Link to='/projetos' onClick={() => setPagina('projetos')} className={styles.link}>Meus projetos</Link>


        </section>
        <section>
            <p>Email: juliaa.brito22@gmail.com</p>
        </section>
    </footer>
    </>
    );
  }