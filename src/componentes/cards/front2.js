import Login from '../../imagens/login.png';

export default function Front2(){
    return(
        <>
        <div className='projCard'>
            <img src={Login} alt='login' className='projImg'/>
            <h3>Tela de Login</h3>
            <p>HTML, CSS e JavaScript, com validação de formulário, e usado técnica de Mobile First</p>
            <a href='https://login-nine-red.vercel.app/' target='_blank' rel="noopener noreferrer"><button>Acesse</button></a>
        </div>
        </>
    );
}