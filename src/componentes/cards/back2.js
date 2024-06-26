import LoginCadastro from '../../imagens/logincad.png';

export default function Back1(){
    return(
        <>
        <div className='projCard'>
            <img src={LoginCadastro} alt='biblioteca' className='projImg'/>
            <h3>Cadastro e Login</h3>
            <p>Aplicação web de cadastro/login e alteração de senha, feito em ASP.NET MVC + VB + Sql Server + Entity Framework</p>
            <a href='https://github.com/Juliaal390/loginmvc' target='_blank' rel="noopener noreferrer"><button>Acesse</button></a>
        </div>
        </>
    );
}