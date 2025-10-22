import React from 'react';
import { useCarrito } from '../context/CarritoContext';
import { Link } from 'react-router-dom';
import '../assets/css/VistaPreviaCarrito.css'; // Crearemos este CSS

const VistaPreviaCarrito = () => {
  // 1. Obtenemos TODO lo que necesitamos del contexto
  const { 
    carrito, 
    showCarrito, 
    toggleCarrito, 
    eliminarDelCarrito, 
    totalPrecio, 
    formatearPrecio 
  } = useCarrito();

  // 2. Si showCarrito es false, el componente no renderiza NADA.
  if (!showCarrito) {
    return null;
  }

  // 3. Si showCarrito es true, renderiza la vista previa.
  return (
    // El fondo oscuro. Al hacer clic, llama a toggleCarrito para cerrar.
    <div className="cart-overlay" onClick={toggleCarrito}>
      
      {/* El contenedor del carrito. 
        Usamos stopPropagation para que al hacer clic DENTRO 
        del carrito, no se cierre.
      */}
      <div className="cart-preview-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Encabezado */}
        <div className="cart-preview-header">
          <h2>Mi Carrito</h2>
          <button className="close-btn" onClick={toggleCarrito}>×</button>
        </div>
        
        {/* Cuerpo (lista de productos) */}
        <div className="cart-preview-body">
          {carrito.length === 0 ? (
            <p className="carrito-vacio">Tu carrito está vacío.</p>
          ) : (
            // Mapeamos los productos del carrito
            carrito.map(producto => (
              <div key={producto.id} className="cart-item-preview">
                {/* La foto del producto */}
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre} 
                  className="cart-item-img" 
                />
                
                {/* Info y precio */}
                <div className="cart-item-info">
                  <p className="item-nombre">{producto.nombre}</p>
                  <p className="item-precio">
                    {producto.cantidad} x {formatearPrecio(producto.precio)}
                  </p>
                </div>
                
                {/* Botón para eliminar */}
                <button 
                  className="item-eliminar"
                  onClick={() => eliminarDelCarrito(producto.id)}
                >
                  &times;
                </button>
              </div>
            ))
          )}
        </div>
        
        {/* Footer (Total y botones) */}
        {carrito.length > 0 && (
          <div className="cart-preview-footer">
            <div className="total-preview">
              <strong>Subtotal:</strong>
              {/* El total que ya calculamos en el contexto */}
              <strong>{formatearPrecio(totalPrecio)}</strong>
            </div>
            
            {/* Links a la página de carrito/checkout.
              Agregamos toggleCarrito para que se cierre la 
              vista previa al ir a la página completa.
            */}
            <Link to="/carrito" className="btn btn-ver-carrito" onClick={toggleCarrito}>
              Ver Carrito
            </Link>
            <Link to="/checkout" className="btn btn-finalizar" onClick={toggleCarrito}>
              Finalizar Compra
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};

export default VistaPreviaCarrito;