import { useState } from 'react'

function BucleInfinito2(){
  const [contador, setContador] = useState(0)

  setContador(contador + 1) // Esto causa el bucle infinito debido a que suma constantemente y al hacer eso se renderiza constantemente sin un fin

  return(
    <div>
      <h2>{contador}</h2>
    </div>
  )
}

export default BucleInfinito2