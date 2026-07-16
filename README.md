// Caso Error 1 //
- Ocurre que los numeros suman infinitamente.
- Debido a que el useEffect se ejecuta infinitas veces debido a que no hay un indicador.
- Caso1Error.jsx:7 Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render. Suma los números infinitamente.
- Ubicando [] al final del useEffect ya que pone un limite de 1 y no se suma infinitamente.
- Los [] y que ya no aparece los errores.

// Caso Error 2 //
- Ocurre que no se renderiza nada y no se muestra nada.
- Debido a que suma constantemente y al hacer eso se renderiza constantemente sin un fin, y por evitar problemas el sistema lo limita.
- React-dom_client.js?v=31c48915:4255 Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop. No se renderiza adecuadamente debido al sin fin en el contador.
- Ubicando onClick={()=> setContador(contador + 1)} dentro de un boton y hacer que se vaya renderizando segun los clic al boton, uno por clic.
- Ahora ya se muestra el contador con un boton y asi controlar el contador

// Instalar dependecias //
1. Clonar el repositorio.
https://github.com/danilui28/taller-bucles-infinitos
2. Entrar en la carpeta del proyecto.
3. Instalar las dependencias.
4. Ejecutar el proyecto.
5. Abrir el navegador en:
```
http://localhost:5173
```