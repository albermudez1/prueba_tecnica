//Lista simple de productos

import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  if (!products?.length) {
    return <p>No se encontraron productos.</p>;
  }

  return (
    <section className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </section>
  );
}