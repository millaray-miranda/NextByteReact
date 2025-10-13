import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCarrito } from "../context/CarritoContex.jsx";
import "../assets/css/productos.css";

// Imágenes de productos (usa placeholders online por ahora)
const productosData = [
  {
    id: 1,
    nombre: "Monitor Xiaomi G34WQi",
    precio: 195990,
    categoria: "monitores",
    imagen: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop",
    enlace: "/producto/monitor-xiaomi"
  },
  {
    id: 2,
    nombre: "ATTACK SHARK Ajazz AK820",
    precio: 99990,
    categoria: "teclados",
    imagen: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
    enlace: "/producto/teclado-ajazz"
  },
  {
    id: 3,
    nombre: "Logitech G502 Hero",
    precio: 70000,
    categoria: "mouses",
    imagen: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    enlace: "/producto/mouse-logitech"
  },
  {
    id: 4,
    nombre: "Silla Gamer Ergonómica",
    precio: 249990,
    categoria: "sillas",
    imagen: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
    enlace: "/producto/silla-gamer"
  },
  {
    id: 5,
    nombre: "Auriculares HyperX Cloud II",
    precio: 89990,
    categoria: "audio",
    imagen: "https://images.unsplash.com/photo-1584670747147-4c8c95e5e7a0?w=400&h=300&fit=crop",
    enlace: "/producto/auriculares-hyperx"
  },
  {
    id: 6,
    nombre: "Monitor Samsung Odyssey",
    precio: 299990,
    categoria: "monitores",
    imagen: "https://images.unsplash.com/photo-1551649001-7a2482d98d09?w=400&h=300&fit=crop",
    enlace: "/producto/monitor-samsung"
  },
  {
    id: 7,
    nombre: "Teclado Mecánico Redragon",
    precio: 59990,
    categoria: "teclados",
    imagen: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
    enlace: "/producto/teclado-redragon"
  },
  {
    id: 8,
    nombre: "Mouse Inalámbrico Razer",
    precio: 89990,
    categoria: "mouses",
    imagen: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    enlace: "/producto/mouse-razer"
  }
];

const Productos = () => {
  const [productos] = useState(productosData);
  const [productosFiltrados, setProductosFiltrados] = useState(productosData);
  const [categoriaActiva, setCategoriaActiva] = useState("todos");
  const [precioMaximo, setPrecioMaximo] = useState(500000);
  const { agregarAlCarrito } = useCarrito();

  // Función para formatear precios
  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(precio);
  };

  // Filtrar productos cuando cambien los filtros
  useEffect(() => {
    let productosFiltrados = productos;
    
    // Filtrar por categoría
    if (categoriaActiva !== 'todos') {
      productosFiltrados = productosFiltrados.filter(producto => 
        producto.categoria === categoriaActiva
      );
    }
    
    // Filtrar por precio
    productosFiltrados = productosFiltrados.filter(producto => 
      producto.precio <= precioMaximo
    );
    
    setProductosFiltrados(productosFiltrados);
  }, [categoriaActiva, precioMaximo, productos]);

  // Manejar agregar al carrito
  const handleAgregarAlCarrito = (producto) => {
    agregarAlCarrito(producto);
  };

  // Categorías disponibles
  const categorias = [
    { id: 'todos', nombre: 'Todos' },
    { id: 'monitores', nombre: 'Monitores' },
    { id: 'teclados', nombre: 'Teclados' },
    { id: 'mouses', nombre: 'Mouses' },
    { id: 'audio', nombre: 'Audio' },
    { id: 'sillas', nombre: 'Sillas Gamer' }
  ];

  return (
    <div className="productos-page">
      <Navbar />
      
      <div className="productos-container">
        <h1>Nuestros Productos</h1>
        
        <div className="filtros-container">
          <h3>Categorías</h3>
          <div className="categorias-filtro">
            {categorias.map(categoria => (
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
              <a href={producto.enlace}>
                <img src={producto.imagen} alt={producto.nombre} className="producto-img" />
              </a>
              <div className="producto-info">
                <h3 className="producto-nombre">{producto.nombre}</h3>
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