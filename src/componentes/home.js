import styles from './home.module.css';
import eu from '../imagens/minhafoto.png';
import React from 'react';
import 'react-tippy/dist/tippy.css';
import {Tooltip} from 'react-tippy';
import pdf from '../imagens/julia.pdf';
import {  SiJavascript, SiReact, SiTypescript, SiVisualbasic, SiCsharp, SiJquery, SiPostman } from "react-icons/si";
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
          Sou graduanda em Sistemas de Informação pela Universidade do Estado de Minas Gerais (UEMG) e iniciei meus estudos na área em 2021. Ao longo da minha trajetória, desenvolvi um conhecimento sólido tanto em front-end quanto em back-end, podendo atuar em diferentes fases do desenvolvimento de sistemas. Além disso, tenho experiência com suporte, onde aprimorei minhas habilidades de apoio ao cliente.
          </p>

          <a href={pdf} download='Julia Alves CV'><button>Currículo</button></a>
        </div>
      </section>

      <section className={styles.habilidades}>
        <h2>Habilidades Principais</h2>
        <div>
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

        <Tooltip title="Visual Basic" position="bottom" arrow="true" theme='transparent'>
        <SiVisualbasic className={`${styles.icon} ${styles.vb}`}/>
        </Tooltip>

        <Tooltip title="CSharp" position="bottom" arrow="true" theme='transparent'>
        <SiCsharp className={`${styles.icon} ${styles.csharp}`}/>
        </Tooltip>

        <Tooltip title="JQuery" position="bottom" arrow="true" theme='transparent'>
        <SiJquery className={`${styles.icon} ${styles.jquery}`}/>
        </Tooltip>

        <Tooltip title="Postman" position="bottom" arrow="true" theme='transparent'>
        <SiPostman className={`${styles.icon} ${styles.postman}`}/>
        </Tooltip>  
        </div>
      </section>
      </section>
      
      </>
    );
  }