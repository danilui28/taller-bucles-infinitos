import { useState } from 'react'
import './App.css'
import BucleCorregido1 from './componentes/Correciones/Caso1Corregido'
import BucleCorregido2 from './componentes/Correciones/Caso2Corregido'

function App(){
  return(
    <div>
      <h1>Taller de Bucles Infinitos en React</h1>

      <h2>Caso 1 - Versión Corregida</h2>
      <BucleCorregido1 />

      <h2>Caso 2 - Versión Corregida</h2>
      <BucleCorregido2 />
    </div>
  )
}

export default App
