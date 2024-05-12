import styles from './projetos.module.css';
import { useContext } from 'react';
import { LinkagemContext } from '../context/linkagem';
import Front from './front';
import Back from './back';

export default function Projetos() {
    const {stack, setStack} = useContext(LinkagemContext);

    return (
      <>
      <section className={styles.projetos}>
        <h2>Meus projetos</h2>

        <div className={styles.divisoria}>
        <div className={styles.menuProjetos}>
            <button onClick={()=>setStack('front')}>Front-end</button>
            <button onClick={()=>setStack('back')}>Back-end</button>
          </div>
        <div className={styles.projetosBox}>
          {stack==='front'?<Front/>:<Back/>}
        </div>
        </div>
      </section>

      </>
    );
  }