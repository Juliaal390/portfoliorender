import Biblioteca from '../../imagens/bancobiblioteca.png'

export default function Back1(){
    return(
        <>
        <div className='projCard'>
            <img src={Biblioteca} alt='biblioteca' className='projImg'/>
            <h3>Banco de dados para biblioteca</h3>
            <p>Criação de um banco de dados para biblioteca no PostgreSQL, seguindo o diagrama e informações dadas</p>
            <a href='https://github.com/Juliaal390/Banco_de_dados/tree/main' target='_blank' rel="noopener noreferrer"><button>Acesse</button></a>
        </div>
        </>
    );
}