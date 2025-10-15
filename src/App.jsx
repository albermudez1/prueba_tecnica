import { useEffect } from "react";
import { fetchProducts } from "./api/products";

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // 🔹 Prueba de que la API funciona correctamente
  useEffect(() => {
    fetchProducts()
      .then((data) => {
        console.log("Productos obtenidos:", data.length);
        console.log("Ejemplo de producto:", data[0]);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  // 🔹 Retornamos un HTML vacío por ahora, solo para mantener el componente válido
  return <h1>... Probando conexión con la API ...</h1>;
}

export default App;



//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
