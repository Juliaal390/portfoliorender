import styles from './projetos.module.css';
import { useContext, useRef, useEffect } from 'react';
import { LinkagemContext } from '../context/linkagem';
import Front from './front';
import Back from './back';

export default function Projetos() {
    const {stack, setStack} = useContext(LinkagemContext);
    const frontRef = useRef();
    const backRef = useRef();

    useEffect(() => {
      if (stack === 'front') {
        frontRef.current.style.color = 'white';
        backRef.current.style.color='';
      } else {
        frontRef.current.style.color='';
        backRef.current.style.color = 'white';
      }
    }, [stack]);
    

    return (
      <>
      <section className={styles.projetos}>
        <h2>Meus projetos</h2>

        <div className={styles.divisoria}>
        <div className={styles.menuProjetos}>
            <button onClick={()=>setStack('front')} ref={frontRef}>Front-end</button>
            <button onClick={()=>setStack('back')} ref={backRef}>Back-end</button>
          </div>
        <div className={styles.projetosBox}>
          {stack==='front'?<Front/>:<Back/>}
        </div>
        </div>
      </section>

      </>
    );
  }