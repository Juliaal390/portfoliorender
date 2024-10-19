import Plataforma from '../../imagens/plataforma.jpeg';

export default function Front4(){
    return(
        <>
        <div className='projCard'>
            <img src={Plataforma} alt='lista de tarefas' className='projImg'/>
            <h3>Uget</h3>
            <p>Dev voluntária na plataforma de recrutamento Uget, utilizando Next, TypeScript, Tailwind e Headless UI</p>
            <a href='https://github.com/Recrutary' disabled target='_blank' rel="noopener noreferrer"><button>Acesse</button></a>
        </div>
        </>
    );
}