import styles from './projetos.module.css';
import Front from './front';
// import Back from './back';

export default function Projetos() {
    return (
      <>
      <section className={styles.projetos}>
        <h2>Meus projetos</h2>

        <div className={styles.divisoria}>
        <div className={styles.menuProjetos}>
            <button>Front-end</button>
            <button>Back-end</button>
          </div>
        <div className={styles.projetosBox}>
            <Front/>
          
        </div>
        </div>
      </section>

      </>
    );
  }