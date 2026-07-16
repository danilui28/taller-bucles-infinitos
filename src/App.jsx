import { useState } from 'react'
import './App.css'
import BucleInfinito1 from './componentes/Errores/Caso1Error'
import BucleCorregido1 from './componentes/Correciones/Caso1Corregido'
import BucleInfinito2 from './componentes/Errores/Caso2Error'
import BucleCorregido2 from './componentes/Correciones/Caso2Corregido'

function App(){
  return(
    <div>

      <BucleCorregido1 />

      <BucleCorregido2 />

    </div>
  )
}

export default App
