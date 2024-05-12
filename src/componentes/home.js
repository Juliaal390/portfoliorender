import styles from './home.module.css';
import eu from '../imagens/minhafoto.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSquareJs, faReact, faWordpress, faGitAlt, faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import 'react-tippy/dist/tippy.css';
import {Tooltip} from 'react-tippy';

export default function Home() {
    return (
      <>

      <section className={styles.home}>
      <section className={styles.sobre}>
        <img src={eu}/>
        <div className={styles.sobreAside}>
          <h2>Quem sou eu?</h2>
          <p>
          Sou atualmente estudante de Sistemas de Informação da Universidade do Estado de Minas Gerais (UEMG). Apesar de ter iniciado a faculdade em Março de 2023, tenho contato com desenvolvimento desde 2021, ano em que iniciei o curso de programação da Evolute e me apaixonei definitivamente pela área. Além disso, fui estagiária de TI de Março a Maio de 2024, no Jornal Folha da Manhã.
          </p>

          <a href='' download><button>Currículo</button></a>
        </div>
      </section>

      <section className={styles.habilidades}>
        <h2>Habilidades</h2>
        <div>
        <Tooltip title="HTML" position="bottom" arrow="true" theme='transparent'>
        <FontAwesomeIcon icon={faHtml5} className={`${styles.icon} ${styles.html}`} />
        </Tooltip>

        <Tooltip title="CSS" position="bottom" arrow="true" theme='transparent'>
        <FontAwesomeIcon icon={faCss3Alt} className={`${styles.icon} ${styles.css}`} />
        </Tooltip>

        <Tooltip title="JavaScript" position="bottom" arrow="true" theme='transparent'>
        <FontAwesomeIcon icon={faSquareJs} className={`${styles.icon} ${styles.js}`} />
        </Tooltip>

        <Tooltip title="React JS" position="bottom" arrow="true" theme='transparent'>
        <FontAwesomeIcon icon={faReact} className={`${styles.icon} ${styles.react}`} />
        </Tooltip>

        <Tooltip title="Banco de dados" position="bottom" arrow="true" theme='transparent'>
        <FontAwesomeIcon icon={faDatabase} className={`${styles.icon} ${styles.database}`} />
        </Tooltip>

        <Tooltip title="WordPress" position="bottom" arrow="true" theme='transparent'>
        <FontAwesomeIcon icon={faWordpress} className={`${styles.icon} ${styles.wordpress}`} />
        </Tooltip>

        <Tooltip title="Figma" position="bottom" arrow="true" theme='transparent'>
        <FontAwesomeIcon icon={faFigma} className={`${styles.icon} ${styles.figma}`}/>
        </Tooltip>

        <Tooltip title="Git" position="bottom" arrow="true" theme='transparent'>
        <FontAwesomeIcon icon={faGitAlt} className={`${styles.icon} ${styles.git}`} />
        </Tooltip>

        <Tooltip title="GitHub" position="bottom" arrow="true" theme='transparent'>
        <FontAwesomeIcon icon={faGithub} className={`${styles.icon} ${styles.github}`} />
        </Tooltip>
        </div>
      </section>
      </section>
      
      </>
    );
  }