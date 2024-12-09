import Motiro from '../../imagens/motiro.png';

export default function Front5(){
    return(
        <>
        <div className='projCard'>
            <img src={Motiro} alt='lista de tarefas' className='projImg'/>
            <h3>Instituto Motirõ</h3>
            <p>UX/UI e site desenvolvido em WordPress para o Instituto Motirõ, localizado em Passos - MG</p>
            <a href='https://institutomotiro.com.br/' disabled target='_blank' rel="noopener noreferrer"><button>Acesse</button></a>
        </div>
        </>
    );
}