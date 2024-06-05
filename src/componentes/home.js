import styles from './home.module.css';
import eu from '../imagens/minhafoto.png';
import React from 'react';
import 'react-tippy/dist/tippy.css';
import {Tooltip} from 'react-tippy';
import pdf from '../imagens/julia.pdf';
import {  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiGithub, SiTypescript } from "react-icons/si";
import { FaDatabase, FaFigma, FaGitAlt } from "react-icons/fa6";



export default function Home() {
    return (
      <>

      <section className={styles.home}>
      <section className={styles.sobre}>
        <img src={eu}/>
        <div className={styles.sobreAside}>
          <h2>Quem sou eu?</h2>
          <p>
          Sou atualmente graduanda de Sistemas de Informação da Universidade do Estado de Minas Gerais (UEMG). Apesar de ter iniciado a faculdade em Março de 2023, tenho contato direto com desenvolvimento desde 2021, ano em que iniciei o curso de programação da Evolute e me apaixonei definitivamente pela área. Estudo constantemente, e busco oportunidades de emprego ou estágio na área de tecnologia.
          </p>

          <a href={pdf} download='Julia Alves CV'><button>Currículo</button></a>
        </div>
      </section>

      <section className={styles.habilidades}>
        <h2>Habilidades</h2>
        <div>
        <Tooltip title="HTML" position="bottom" arrow="true" theme='transparent'>
        <SiHtml5 className={`${styles.icon} ${styles.html}`} />
        </Tooltip>

        <Tooltip title="CSS" position="bottom" arrow="true" theme='transparent'>
        <SiCss3 className={`${styles.icon} ${styles.css}`} />
        </Tooltip>

        <Tooltip title="JavaScript" position="bottom" arrow="true" theme='transparent'>
        <SiJavascript className={`${styles.icon} ${styles.js}`} />
        </Tooltip>

        <Tooltip title="TypeScript" position="bottom" arrow="true" theme='transparent'>
        <SiTypescript className={`${styles.icon} ${styles.ts}`} />
        </Tooltip>

        <Tooltip title="React JS" position="bottom" arrow="true" theme='transparent'>
        <SiReact className={`${styles.icon} ${styles.react}`} />
        </Tooltip>

        <Tooltip title="Banco de dados" position="bottom" arrow="true" theme='transparent'>
        <FaDatabase className={`${styles.icon} ${styles.database}`} />
        </Tooltip>


        <Tooltip title="Figma" position="bottom" arrow="true" theme='transparent'>
        <FaFigma className={`${styles.icon} ${styles.figma}`}/>
        </Tooltip>

        <Tooltip title="Next JS" position="bottom" arrow="true" theme='transparent'>
        <SiNextdotjs className={`${styles.icon} ${styles.next}`}/>
        </Tooltip>

        <Tooltip title="Git" position="bottom" arrow="true" theme='transparent'>
        <FaGitAlt className={`${styles.icon} ${styles.git}`} />
        </Tooltip>

        <Tooltip title="GitHub" position="bottom" arrow="true" theme='transparent'>
        <SiGithub className={`${styles.icon} ${styles.github}`} />
        </Tooltip>

        
        </div>
      </section>
      </section>
      
      </>
    );
  }