//Archivo con funciones para obtener datos de la API Fake Store.

const BASE_URL = "https://fakestoreapi.com";

//Obtener todos los productos
export async function fetchProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("Error al obtener los productos");
  return res.json();
}

//Obtener la lista de categorías disponibles
export async function fetchCategories() {
  const res = await fetch(`${BASE_URL}/products/categories`);
  if (!res.ok) throw new Error("Error al obtener las categorías");
  return res.json();
}

//Obtener productos según una categoría específica
export async function fetchProductsByCategory(category) {
  const res = await fetch(
    `${BASE_URL}/products/category/${encodeURIComponent(category)}`
  );
  if (!res.ok) throw new Error("Error al obtener productos por categoría");
  return res.json();
}