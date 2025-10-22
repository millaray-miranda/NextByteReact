import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importa Link
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCarrito } from "../context/CarritoContext.jsx";
import { 
  productosData, 
  categoriasDisponibles 
} from "../data/productosData";
import "../assets/css/productos.css";

const Productos = () => {
  const [productosFiltrados, setProductosFiltrados] = useState(productosData);
  const [categoriaActiva, setCategoriaActiva] = useState("todos");
  const [precioMaximo, setPrecioMaximo] = useState(500000);
  const { agregarAlCarrito } = useCarrito();

  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(precio);
  };

  useEffect(() => {
    let productosFiltrados = productosData;
    
    if (categoriaActiva !== 'todos') {
      productosFiltrados = productosFiltrados.filter(producto => 
        producto.categoria === categoriaActiva
      );
    }
    
    productosFiltrados = productosFiltrados.filter(producto => 
      producto.precio <= precioMaximo
    );
    
    setProductosFiltrados(productosFiltrados);
  }, [categoriaActiva, precioMaximo]);

  const handleAgregarAlCarrito = (producto) => {
    agregarAlCarrito(producto);
  };

  return (
    <div className="productos-page">
      <Navbar />
      
      <div className="productos-container">
        <h1>Nuestros Productos</h1>
        
        <div className="filtros-container">
          <h3>Categorías</h3>
          <div className="categorias-filtro">
            {categoriasDisponibles.map(categoria => (
              <button
                key={categoria.id}
                className={`categoria-btn ${categoriaActiva === categoria.id ? 'active' : ''}`}
                onClick={() => setCategoriaActiva(categoria.id)}
              >
                {categoria.nombre}
              </button>
            ))}
          </div>
          
          <div className="filtro-precio">
            <h3>Rango de Precio</h3>
            <input 
              type="range" 
              min="0" 
              max="1000000" 
              step="10000" 
              value={precioMaximo}
              onChange={(e) => setPrecioMaximo(parseInt(e.target.value))}
              id="rango-precio"
            />
            <div id="valor-precio">Hasta: {formatearPrecio(precioMaximo)}</div>
          </div>
        </div>
        
        <div className="productos-grid">
          {productosFiltrados.map(producto => (
            <div key={producto.id} className="producto-card">
              {/* CORRECCIÓN: Usar Link en lugar de a href */}
              <Link to={`/producto/${producto.id}`}>
                <img src={producto.imagen} alt={producto.nombre} className="producto-img" />
              </Link>
              <div className="producto-info">
                <h3 className="producto-nombre">
                  {/* CORRECCIÓN: También en el título */}
                  <Link to={`/producto/${producto.id}`}>
                    {producto.nombre}
                  </Link>
                </h3>
                <p className="producto-precio">{formatearPrecio(producto.precio)}</p>
                <button 
                  className="producto-btn"
                  onClick={() => handleAgregarAlCarrito(producto)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {productosFiltrados.length === 0 && (
          <div className="no-productos">
            <p>No se encontraron productos con los filtros seleccionados.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Productos;