import styles from './home.module.css';
import eu from '../imagens/minhafoto.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSquareJs, faReact, faWordpress, faGitAlt, faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import 'react-tippy/dist/tippy.css';
import {
 Tooltip,
} from 'react-tippy';





export default function Home() {
    return (
      <>

      <section className={styles.home}>
      <section className={styles.sobre}>
        <img src={eu}/>
        <div className={styles.sobreAside}>
          <h2>Quem sou eu?</h2>
          <p>
          Sou entusiasta de desenvolvimento web, atualmente cursando Sistemas de Informação na Universidade do Estado de Minas Gerais (UEMG). Para mim, desenvolvimento é uma forma de arte. Estou sempre buscando oportunidades que permitam expandir meus conhecimentos como desenvolvedora front-end. 
          Com experiência em HTML, CSS, JavaScript, React JS e WordPress, estou constantemente aprimorando minhas habilidades técnicas. Além disso, estou familiarizada com ferramentas essenciais como Git e GitHub, garantindo um trabalho eficiente e colaborativo.
          </p>

          <button>Currículo</button>
        </div>
      </section>

      <section className={styles.habilidades}>
        <h2>Habilidades</h2>
        <div>
        <Tooltip title="HTML" position="bottom">
        <FontAwesomeIcon icon={faHtml5} className={`${styles.icon} ${styles.html}`} />
        </Tooltip>

        <Tooltip title="CSS" position="bottom">
        <FontAwesomeIcon icon={faCss3Alt} className={`${styles.icon} ${styles.css}`} />
        </Tooltip>

        <Tooltip title="JavaScript" position="bottom">
        <FontAwesomeIcon icon={faSquareJs} className={`${styles.icon} ${styles.js}`} />
        </Tooltip>

        <Tooltip title="React JS" position="bottom">
        <FontAwesomeIcon icon={faReact} className={`${styles.icon} ${styles.react}`} />
        </Tooltip>

        <Tooltip title="Banco de dados" position="bottom">
        <FontAwesomeIcon icon={faDatabase} className={`${styles.icon} ${styles.database}`} />
        </Tooltip>

        <Tooltip title="WordPress" position="bottom">
        <FontAwesomeIcon icon={faWordpress} className={`${styles.icon} ${styles.wordpress}`} />
        </Tooltip>

        <Tooltip title="Figma" position="bottom">
        <FontAwesomeIcon icon={faFigma} className={`${styles.icon} ${styles.figma}`}/>
        </Tooltip>

        <Tooltip title="Git" position="bottom">
        <FontAwesomeIcon icon={faGitAlt} className={`${styles.icon} ${styles.git}`} />
        </Tooltip>

        <Tooltip title="GitHub" position="bottom">
        <FontAwesomeIcon icon={faGithub} className={`${styles.icon} ${styles.github}`} />
        </Tooltip>
        </div>
      </section>
      </section>
      
      </>
    );
  }