// Caso Error 1 //
1. ¿Qué ocurre cuando se ejecuta el ejemplo con error?
- Ocurre que los numeros suman infinitamente.

2. ¿Por qué se produce el bucle infinito o el error de renderizado?
- Debido a que el useEffect se ejecuta infinitas veces debido a que no hay un indicador.

3. ¿Qué síntomas aparecen en la aplicación, el navegador o la consola?
- React muestra el siguiente error: Caso1Error.jsx:7 Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.
- El contador aumenta sin detenerse y la aplicación consume muchos recursos.

4. ¿Cómo se solucionó el problema y por qué la corrección evita nuevas renderizaciones innecesarias?
- Ubicando [] al useEffect haciendo que el efecto solo se ejecute una vez cuando el componente se monta.

5. ¿Cuál es la diferencia entre la versión con error y la versión corregida?
- La versión con error ejecuta el efecto después de cada renderizado, mientras que la versión corregida lo ejecuta solamente una vez al iniciar el componente.

// Caso Error 2 //
1. ¿Qué ocurre cuando se ejecuta el ejemplo con error?
- La aplicación no llega a mostrarse correctamente porque React detecta un ciclo infinito de renderizados y detiene la ejecución.

2. ¿Por qué se produce el bucle infinito o el error de renderizado?
- La función setContador() se ejecuta directamente dentro del cuerpo del componente, lo que hace que se actualice y provoque un nuevo renderizado.

3. ¿Qué síntomas aparecen en la aplicación, el navegador o la consola?
- React muestra el siguiente error:
Too many re-renders.
React limits the number of renders to prevent an infinite loop.
- El componente no se renderiza correctamente.

4. ¿Cómo se solucionó el problema y por qué la corrección evita nuevas renderizaciones innecesarias?
- Ubicando "onClick={()=> setContador(contador + 1)}" dentro de un boton y hacer que se vaya renderizando cuando el usuario de clic.

5. ¿Cuál es la diferencia entre la versión con error y la versión corregida?
- La versión con error actualiza el estado durante el renderizado del componente. La versión corregida solo actualiza el estado cuando ocurre una acción del usuario, por lo que React renderiza el componente normalmente.

// Instalar dependecias //
1. Clonar el repositorio.
https://github.com/danilui28/taller-bucles-infinitos

2. Entrar en la carpeta del proyecto.
cd taller-bucles-infinitos

3. Instalar las dependencias.
npm install

4. Ejecutar el proyecto.
npm run dev

5. Abrir el navegador en:
```
http://localhost:5173
```