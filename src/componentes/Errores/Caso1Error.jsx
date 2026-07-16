import { useState, useEffect } from 'react'

function BucleInfinito1(){
  const [contador, setContador] = useState(0)
useEffect
  useEffect(() => {
    setContador(contador + 1)
  })   // Esto causa el bucle infinito al no tener un indicador de cuando detenerse

  return(
    <div>
      <h2>{contador}</h2>
    </div>
  )
}

export default BucleInfinito1