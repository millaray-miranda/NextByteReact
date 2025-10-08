import React, { createContext, useContext, useState, useEffect } from 'react';

const CarritoContext = createContext();

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCarrito debe ser usado dentro de un CarritoProvider');
  }
  return context;
};

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [showCarrito, setShowCarrito] = useState(false);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const savedCarrito = localStorage.getItem('carrito');
    if (savedCarrito) {
      setCarrito(JSON.parse(savedCarrito));
    }
  }, []);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  // Función para formatear precios
  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(precio);
  };

  // Agregar producto al carrito
  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find(p => p.id === producto.id);
    
    if (productoExistente) {
      setCarrito(carrito.map(p => 
        p.id === producto.id 
          ? { ...p, cantidad: (p.cantidad || 1) + 1 }
          : p
      ));
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
    
    window.alert(`¡${producto.nombre} agregado al carrito!`);
  };

  // Eliminar producto del carrito
  const eliminarDelCarrito = (productoId) => {
    setCarrito(carrito.filter(producto => producto.id !== productoId));
  };

  // Vaciar carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // Actualizar contador del carrito
  const actualizarContador = () => {
    return carrito.reduce((acc, producto) => acc + (producto.cantidad || 1), 0);
  };

  // Calcular total del carrito
  const calcularTotal = () => {
    return carrito.reduce((total, producto) => {
      return total + (producto.precio * (producto.cantidad || 1));
    }, 0);
  };

  // Toggle carrito
  const toggleCarrito = () => {
    setShowCarrito(!showCarrito);
  };

  const value = {
    carrito,
    showCarrito,
    setShowCarrito,
    agregarAlCarrito,
    eliminarDelCarrito,
    vaciarCarrito,
    actualizarContador,
    calcularTotal,
    formatearPrecio,
    toggleCarrito
  };

  return (
    <CarritoContext.Provider value={value}>
      {children}
    </CarritoContext.Provider>
  );
};