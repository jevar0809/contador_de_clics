
import './index.css'


export const ContenedorDelNumero = ({estado})=>{
    console.log(estado)
    return <div className="cajaDeConteo">{estado}</div>



}






export const BotonContarYReset = ({texto, funcion, estiloContar})=>{


    return <button 
        className= {estiloContar? 'botonContar' : 'botonReset'}
        onClick={funcion}
        >{texto}</button>

}

