import { useState, useEffect } from 'react'

function BucleCorregido1(){
  const [contador, setContador] = useState(0)

  useEffect(() => {
    setContador(contador + 1)
  }, [])

  return(
    <div>
      <h2>{contador}</h2>
    </div>
  )
}

export default BucleCorregido1