import { useState } from 'react'

function BucleCorregido2(){
  const [contador, setContador] = useState(0)

  return(
    <div>
      <button onClick={()=> setContador(contador + 1)}>Sumar</button>
      <h2>{contador}</h2>
    </div>
  )
}

export default BucleCorregido2