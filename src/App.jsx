import { useEffect } from "react";
import { fetchProducts } from "./api/products";
import ProductCard from "./components/ProductCard";
import "./styles/App.css";

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [products, setProducts] = useState([]);

  //Cargar productos al iniciar
  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error al obtener productos:", err));
  }, []);

  return (
    <main className="container">
      <h1 className="title">Lista de productos</h1>

      {products.length > 0 ? (
        <section className="grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </section>
      ) : (
        <p>Cargando productos...</p>
      )}
    </main>
  );
}

export default App;
