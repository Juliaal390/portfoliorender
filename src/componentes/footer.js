import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub, faSquareBehance } from '@fortawesome/free-brands-svg-icons';
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
            <a href='https://www.linkedin.com/in/julia-alves-956507273/' target='_blank' rel="noreferrer noopener"><FontAwesomeIcon icon={faLinkedin} className={`${styles.icon} ${styles.linkedin}`}/></a>

            <a href='https://github.com/Juliaal390' target='_blank' rel="noreferrer noopener"><FontAwesomeIcon icon={faSquareGithub} className={`${styles.icon} ${styles.github}`}/></a>

            <a href='https://www.behance.net/juliaal' target='_blank' rel="noreferrer noopener"><FontAwesomeIcon icon={faSquareBehance} className={`${styles.icon} ${styles.behance}`}/></a>
            

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