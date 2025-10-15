//Componente que muestra la tarjeta de un solo producto.

export default function ProductCard({ product }) {
  //Formateo del precio en USD con separadores y símbolo $
  const formattedPrice = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <article className="product-card" title={product.title}>
      <img
        className="product-image"
        src={product.image}
        alt={`Imagen de ${product.title}`}
      />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">{formattedPrice}</p>
    </article>
  );
}