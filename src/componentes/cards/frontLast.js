import Figma from '../../imagens/figma.png';

export default function FrontLast(){
    return(
        <>
        <div className='projCard'>
            <img src={Figma} alt='lista de tarefas' className='projImg projImgLast'/>
            <h3>Projetos no Figma</h3>
            <p>Acesse meu Behance e veja meus protótipos criados</p>
            <a href='https://www.behance.net/juliaal' target='_blank' rel="noopener noreferrer"><button>Acesse</button></a>
        </div>
        </>
    );
}