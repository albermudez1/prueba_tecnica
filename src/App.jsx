import { useEffect } from "react";
import {
  fetchProducts,
  fetchCategories,
  fetchProductsByCategory,
} from "./api/products";
import ProductList from "./components/ProductList";
import CategoryFilter from "./components/CategoryFilter";
import "./styles/App.css";

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //Estados principales
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  //Cargar categorías una sola vez
  useEffect(() => {
    fetchCategories()
      .then(setCategories)
      .catch(() => setErrorMsg("Error al cargar las categorías."));
  }, []);

  //Función para cargar productos
  const loadProducts = async (category = selectedCategory) => {
    setLoading(true);
    setErrorMsg("");
    try {
      const data = category
        ? await fetchProductsByCategory(category)
        : await fetchProducts();
      setProducts(data);
    } catch (e) {
      setErrorMsg("Error al cargar los productos.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  //Xargar productos cuando cambia la categoría
  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  return (
    <main className="container">
      <h1 className="title">Lista de productos</h1>

      <div className="toolbar">
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />
        {/*  boton de recarga  */}
      </div>

      {errorMsg && <p className="error">{errorMsg}</p>}
      {loading && <p className="status">Cargando productos…</p>}

      {products.length > 0 && !loading ? (
        <ProductList products={products} />
      ) : (
        !loading && <p>No se encontraron productos.</p>
      )}
    </main>
  );
}

export default App;