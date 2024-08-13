import ReactDOM from 'react-dom/client'
import {ContenedorDelNumero, BotonContarYReset} from './componentes'
import { useState } from 'react'


const ROOT = ReactDOM.createRoot(document.getElementById('root'))





const App = ()=>{


  const [estado, setEstado] = useState(0)

    const contar = ()=>{setEstado(estado + 1)}

    const reset = ()=>{setEstado(0)}

  
 



  return (


    <div className='contenedorPrincipal'>
      
      <ContenedorDelNumero estado = {estado}/>

      <BotonContarYReset 
        texto = 'Contar'
        estiloContar = {true}
        funcion = {contar}
      />
      
      <BotonContarYReset 
        texto = 'Reset'
        estiloContar = {false}
        funcion={reset}
        
      />


    </div>
  )
}








ROOT.render(<App />)