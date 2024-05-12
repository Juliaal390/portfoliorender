import Lista from '../../imagens/lista.png';

export default function Front3(){
    return(
        <>
        <div className='projCard'>
            <img src={Lista} alt='lista de tarefas' className='projImg'/>
            <h3>Lista de Tarefas</h3>
            <p>Lista de Tarefas feita em HTML, CSS e JavaScript. Com opção de mudança de tema</p>
            <a href='https://lista-de-tarefas-five-kappa.vercel.app/' target='_blank' rel="noopener noreferrer"><button>Acesse</button></a>
        </div>
        </>
    );
}