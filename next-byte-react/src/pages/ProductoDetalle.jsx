import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCarrito } from "../context/CarritoContex.jsx";
import { 
  obtenerProductoPorId, 
  obtenerProductosRelacionados 
} from "../data/productosData";
import "../assets/css/producto-detalle.css";

const ProductoDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { agregarAlCarrito } = useCarrito();
  const [producto, setProducto] = useState(null);
  const [productosRelacionados, setProductosRelacionados] = useState([]);
  const [imagenPrincipal, setImagenPrincipal] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Obtener producto por ID
    const productoEncontrado = obtenerProductoPorId(id);
    
    if (productoEncontrado) {
      setProducto(productoEncontrado);
      setImagenPrincipal(productoEncontrado.imagen);
      
      // Obtener productos relacionados
      const relacionados = obtenerProductosRelacionados(
        productoEncontrado.id, 
        productoEncontrado.categoria
      );
      setProductosRelacionados(relacionados);
    } else {
      // Redirigir si no se encuentra el producto
      navigate("/productos");
    }
    
    setCargando(false);
  }, [id, navigate]);

  const cambiarImagen = (imagen) => {
    setImagenPrincipal(imagen);
  };

  const handleAgregarAlCarrito = () => {
    if (producto) {
      for (let i = 0; i < cantidad; i++) {
        agregarAlCarrito(producto);
      }
      alert(`¡${cantidad} ${producto.nombre} agregado(s) al carrito!`);
    }
  };

  const handleComprarAhora = () => {
    if (producto) {
      handleAgregarAlCarrito();
      navigate("/carrito");
    }
  };

  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(precio);
  };

  const calcularPrecioConDescuento = () => {
    if (producto && producto.enOferta) {
      return producto.precio * (1 - producto.descuento / 100);
    }
    return producto ? producto.precio : 0;
  };

  if (cargando) {
    return (
      <div className="producto-detalle-page">
        <Navbar />
        <div className="cargando">
          <p>Cargando producto...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!producto) {
    return (
      <div className="producto-detalle-page">
        <Navbar />
        <div className="producto-no-encontrado">
          <h2>Producto no encontrado</h2>
          <p>El producto que buscas no existe o ha sido removido.</p>
          <button onClick={() => navigate("/productos")} className="btn-volver">
            Volver a productos
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="producto-detalle-page">
      <Navbar />
      
      <div className="producto-detalle-container">
        {/* Navegación */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link> &gt; 
          <Link to="/productos">Productos</Link> &gt; 
          <span>{producto.nombre}</span>
        </nav>

        <div className="producto-detalle-content">
          {/* Galería de imágenes */}
          <div className="producto-galeria">
            <div className="imagen-principal">
              <img src={imagenPrincipal} alt={producto.nombre} />
              {producto.enOferta && (
                <div className="badge-oferta">Oferta</div>
              )}
            </div>
            <div className="miniaturas">
              {producto.imagenes.map((imagen, index) => (
                <img
                  key={index}
                  src={imagen}
                  alt={`${producto.nombre} ${index + 1}`}
                  className={imagen === imagenPrincipal ? "activa" : ""}
                  onClick={() => cambiarImagen(imagen)}
                />
              ))}
            </div>
          </div>

          {/* Información del producto */}
          <div className="producto-info">
            <h1>{producto.nombre}</h1>
            
            <div className="precio-container">
              {producto.enOferta && (
                <div className="oferta-badge">-{producto.descuento}%</div>
              )}
              <div className="precios">
                {producto.enOferta && (
                  <span className="precio-original">{formatearPrecio(producto.precio)}</span>
                )}
                <span className="precio-actual">
                  {formatearPrecio(calcularPrecioConDescuento())}
                </span>
              </div>
            </div>

            <div className="stock-info">
              <span className={`stock ${producto.stock > 0 ? 'disponible' : 'agotado'}`}>
                {producto.stock > 0 ? `✅ Stock: ${producto.stock} unidades` : '❌ Agotado'}
              </span>
              {producto.stock > 0 && producto.stock < 5 && (
                <span className="stock-bajo">¡Últimas unidades!</span>
              )}
            </div>

            <p className="descripcion">{producto.descripcion}</p>

            <div className="caracteristicas">
              <h3>Características principales:</h3>
              <ul>
                {producto.caracteristicas.map((caracteristica, index) => (
                  <li key={index}>{caracteristica}</li>
                ))}
              </ul>
            </div>

            {/* Selector de cantidad y botones */}
            <div className="acciones-producto">
              <div className="cantidad-selector">
                <label>Cantidad:</label>
                <div className="contador-cantidad">
                  <button 
                    onClick={() => setCantidad(Math.max(1, cantidad - 1))}
                    disabled={cantidad <= 1}
                  >
                    -
                  </button>
                  <span>{cantidad}</span>
                  <button 
                    onClick={() => setCantidad(Math.min(producto.stock, cantidad + 1))}
                    disabled={cantidad >= producto.stock}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="botones-accion">
                <button 
                  className="btn-agregar-carrito"
                  onClick={handleAgregarAlCarrito}
                  disabled={producto.stock === 0}
                >
                  🛒 Agregar al Carrito
                </button>
                <button 
                  className="btn-comprar-ahora"
                  onClick={handleComprarAhora}
                  disabled={producto.stock === 0}
                >
                  💳 Comprar Ahora
                </button>
              </div>
            </div>

            {/* Información de envío y garantía */}
            <div className="info-adicional">
              <div className="info-item">
                <span className="info-icon">🚚</span>
                <div className="info-text">
                  <strong>Envío gratis</strong>
                  <span>En compras sobre $50.000</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">🔄</span>
                <div className="info-text">
                  <strong>30 días de garantía</strong>
                  <span>Devolución sin problemas</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">💳</span>
                <div className="info-text">
                  <strong>Hasta 12 cuotas</strong>
                  <span>Sin interés con tarjetas</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Especificaciones técnicas */}
        <div className="especificaciones-tecnicas">
          <h2>Especificaciones Técnicas</h2>
          <div className="especificaciones-grid">
            {Object.entries(producto.especificaciones).map(([key, value]) => (
              <div key={key} className="especificacion-item">
                <span className="especificacion-key">
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                </span>
                <span className="especificacion-value">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Productos relacionados */}
        {productosRelacionados.length > 0 && (
          <div className="productos-relacionados">
            <h2>Productos Relacionados</h2>
            <div className="relacionados-grid">
              {productosRelacionados.map(productoRel => (
                <div key={productoRel.id} className="producto-relacionado">
                  <Link to={`/producto/${productoRel.id}`}>
                    <img src={productoRel.imagen} alt={productoRel.nombre} />
                  </Link>
                  <div className="producto-relacionado-info">
                    <h4>
                      <Link to={`/producto/${productoRel.id}`}>
                        {productoRel.nombre}
                      </Link>
                    </h4>
                    <p className="precio-relacionado">
                      {formatearPrecio(productoRel.precio)}
                      {productoRel.enOferta && (
                        <span className="oferta-relacionada"> Oferta</span>
                      )}
                    </p>
                    <button 
                      onClick={() => navigate(`/producto/${productoRel.id}`)}
                      className="btn-ver-detalles"
                    >
                      Ver Detalles
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductoDetalle;