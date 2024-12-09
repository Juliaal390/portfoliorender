import Transacoes from '../../imagens/transacoes.png';

export default function Back3(){
    return(
        <>
        <div className='projCard'>
            <img src={Transacoes} alt='CardManager' className='projImg'/>
            <h3>CardManager</h3>
            <p>Sistema de cadastro de transações em WinForms e SQL Server, com uso de índices (SQL) e opção de gerar relatórios em Excel</p>
            <a href='https://github.com/Juliaal390/CardManagerWF' target='_blank' rel="noopener noreferrer"><button>Acesse</button></a>
        </div>
        </>
    );
}