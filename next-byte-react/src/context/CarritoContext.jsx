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
      try {
        setCarrito(JSON.parse(savedCarrito));
      } catch (e) {
        console.error("Error al parsear carrito de localStorage", e);
        setCarrito([]);
      }
    }
  }, []); // Se ejecuta solo una vez al montar

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    // Evitar guardar un array vacío si recién se está cargando
    if (carrito.length > 0 || localStorage.getItem('carrito')) {
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }
  }, [carrito]); // Se ejecuta cada vez que 'carrito' cambia

  
  // Calculamos estos valores directamente. 
  // Se actualizarán automáticamente cada vez que 'carrito' cambie.
  
  const totalItems = carrito.reduce((acc, producto) => acc + (producto.cantidad || 1), 0);
  
  const totalPrecio = carrito.reduce((total, producto) => {
    return total + (producto.precio * (producto.cantidad || 1));
  }, 0);

  // Función para formatear precios
  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(precio);
  };

  

  // Agregar producto al carrito
  const agregarAlCarrito = (producto) => {
    //Usamos la función de actualización
    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find(p => p.id === producto.id);
      
      if (productoExistente) {
        // Si existe, mapeamos el array anterior
        return prevCarrito.map(p => 
          p.id === producto.id 
            ? { ...p, cantidad: (p.cantidad || 1) + 1 }
            : p
        );
      } else {
        // Si no existe, agregamos el nuevo producto al array anterior
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
    
    window.alert(`¡${producto.nombre} agregado al carrito!`);
  };

  // Eliminar producto del carrito
  const eliminarDelCarrito = (productoId) => {
    //Usamos la función de actualización
    setCarrito((prevCarrito) => {
      return prevCarrito.filter(producto => producto.id !== productoId);
    });
  };

  // Vaciar carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // Toggle carrito
  const toggleCarrito = () => {
    setShowCarrito(!showCarrito);
  };

  // Valores y funciones que se exportan desde el context
  const value = {
    carrito,
    showCarrito,
    setShowCarrito,
    agregarAlCarrito,
    eliminarDelCarrito,
    vaciarCarrito,
    formatearPrecio,
    toggleCarrito,
    
    // Nuevos valores calculados
    totalItems,
    totalPrecio
    
    
  };

  return (
    <CarritoContext.Provider value={value}>
      {children}
    </CarritoContext.Provider>
  );
};