import styles from './home.module.css';
import eu from '../imagens/minhafoto.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSquareJs, faReact, faWordpress, faGitAlt, faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';


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
        <FontAwesomeIcon icon={faHtml5} className={`${styles.icon} ${styles.html}`} />
        <FontAwesomeIcon icon={faCss3Alt} className={`${styles.icon} ${styles.css}`} />
        <FontAwesomeIcon icon={faSquareJs} className={`${styles.icon} ${styles.js}`} />
        <FontAwesomeIcon icon={faReact} className={`${styles.icon} ${styles.react}`} />
        <FontAwesomeIcon icon={faDatabase} className={`${styles.icon} ${styles.database}`} />
        <FontAwesomeIcon icon={faWordpress} className={`${styles.icon} ${styles.wordpress}`} />
        <FontAwesomeIcon icon={faFigma} className={`${styles.icon} ${styles.figma}`}/>
        <FontAwesomeIcon icon={faGitAlt} className={`${styles.icon} ${styles.git}`} />
        <FontAwesomeIcon icon={faGithub} className={`${styles.icon} ${styles.github}`} />
        </div>
      </section>
      </section>
      
      </>
    );
  }