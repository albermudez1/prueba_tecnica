//Boton de recarga sencillo.

export default function ReloadButton({ onClick, disabled }) {
  return (
    <button
      className="btn"
      onClick={onClick}
      disabled={disabled}
      aria-label="Recargar productos"
      title="Recargar productos"
    >
      Recargar
    </button>
  );
}