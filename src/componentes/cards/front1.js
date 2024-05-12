import Galeria from '../../imagens/galeria.png'

export default function Front1(){
    return(
        <>
        <div className='projCard'>
            <img src={Galeria} alt='galeria' className='projImg'/>
            <h3>Galeria de imagens</h3>
            <p>Banco de imagens em React JS + Pexels API, feito para estudo de consumo de APIs</p>
            <a href='https://galeria-api-nine.vercel.app/' target='_blank' rel="noopener noreferrer"><button>Acesse</button></a>
        </div>
        </>
    );
}