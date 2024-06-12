import Plataforma from '../../imagens/plataforma.png';

export default function Front4(){
    return(
        <>
        <div className='projCard'>
            <img src={Plataforma} alt='lista de tarefas' className='projImg'/>
            <h3>Plataforma de empregos</h3>
            <p><b>(EM PROGRESSO)</b> Front-end feito em React, Next, TypeScript, Tailwind e Headless UI</p>
            <a href='https://github.com/Recrutary' disabled target='_blank' rel="noopener noreferrer"><button>Acesse</button></a>
        </div>
        </>
    );
}