import styles from './contato.module.css';
import Decoration from '../imagens/decoration.png';
export default function Contato() {
    return (
      <>
        <section className={styles.contato}>
          <div className={styles.decoracao}>
          <img src={Decoration}/>
          </div>


            <form action="https://formsubmit.co/juliaa.brito22@gmail.com" method="POST">
                <h2>Entre em contato comigo</h2>
                <input type="text" name="nome" placeholder='Nome' required/>
                <input type="email" name="email" placeholder='Email' required/>
                <textarea name='mensagem' placeholder='Mensagem' required></textarea>
                <button className='enviar' type="submit">Enviar</button>
            </form>

            </section>
      </>
    );
  }