import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// 1. IMPORTAR EL CONTEXTO
import { useCarrito } from "../context/CarritoContext"; // <-- ¡Asegúrate que esta ruta sea correcta!

import "../assets/css/nav-footer.css";
import logo from "../assets/img/logo.png";
import "../assets/css/home.css";
import "../assets/css/inicio-sesion.css"

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(null);

  // Obtener la ubicación actual para resaltar el link activo
  const location = useLocation();

  // 2. USAR EL CONTEXTO
  // Obtenemos el total de items y la función para mostrar/ocultar la vista previa
  const { totalItems, toggleCarrito } = useCarrito();

  // Cargar usuario al iniciar
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  // 3. FUNCIÓN 'isActive' CORREGIDA
  const isActive = (path) => {
    // La ruta raíz debe ser exacta
    if (path === '/') {
      return location.pathname === '/';
    }
    // Las otras rutas deben coincidir si la URL *comienza* con ellas
    // (ej: /productos activará /productos/1)
    return location.pathname.startsWith(path);
  };

  // Mostrar modal login
  const handleShowLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  // Mostrar modal registro
  const handleShowRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  // Cerrar modales
  const closeForms = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  // Manejar login
  const loginUser = (e) => {
    e.preventDefault();
    const usuario = document.getElementById("login-usuario")?.value;
    const password = document.getElementById("login-password")?.value;

    const admin = { usuario: "admin@admin.cl", password: "1234", rol: "ADMIN", nombre: "Administrador" };
    const user = { usuario: "user@user.cl", password: "1234", rol: "USER", nombre: "Usuario Normal" };

    let loggedInUser = null;

    if (usuario === admin.usuario && password === admin.password) {
      loggedInUser = admin;
    } else if (usuario === user.usuario && password === user.password) {
      loggedInUser = user;
    }

    if (loggedInUser) {
      alert(`Bienvenido ${loggedInUser.rol}`);
      closeForms();
      setCurrentUser(loggedInUser);
      localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  // Cerrar sesión
  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setShowDropdown(null);
    alert("Sesión cerrada");
  };

  // Toggle dropdown
  const toggleDropdown = (menuId) => {
    setShowDropdown(showDropdown === menuId ? null : menuId);
  };

  // Manejar clic fuera del dropdown
  useEffect(() => {
    const handleClickOutside = () => {
      setShowDropdown(null);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="NextByte Logo" className="logo-empresa" />
            </Link>
          </div>

          {/* 4. LINKS DE NAVEGACIÓN CORREGIDOS (paths en minúscula) */}
          <nav className="main-nav">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/productos" // <-- Corregido a minúscula
              className={`nav-link ${isActive('/productos') ? 'active' : ''}`}
            >
              Productos
            </Link>
            <Link
              to="/nosotros" // <-- Corregido a minúscula
              className={`nav-link ${isActive('/nosotros') ? 'active' : ''}`}
            >
              Nosotros
            </Link>
            <Link
              to="/blogs" // <-- Corregido a minúscula
              className={`nav-link ${isActive('/blogs') ? 'active' : ''}`}
            >
              Blogs
            </Link>
            <Link
              to="/contacto" // <-- Corregido a minúscula
              className={`nav-link ${isActive('/contacto') ? 'active' : ''}`}
            >
              Contacto
            </Link>
          </nav>

          <div className="header-actions">
            {/* User Actions */}
            <div className="user-actions">
              {!currentUser ? (
                <div className="auth-buttons">
                  <button className="auth-link" onClick={handleShowLogin}>
                    Iniciar sesión
                  </button>
                  <span className="separator">|</span>
                  <button className="auth-link" onClick={handleShowRegister}>
                    Registrarse
                  </button>
                </div>
              ) : (
                <div className="user-dropdown">
                  <span
                    className="user-badge"
                    onClick={(e) => {
                      e.stopPropagation();
                      const menuId = currentUser.rol === "ADMIN" ? "admin-menu" : "user-menu";
                      toggleDropdown(menuId);
                    }}
                  >
                    👤 {currentUser.nombre} {currentUser.rol === "USER" && `(${currentUser.rol})`} ▼
                  </span>
                  {showDropdown && (
                    <div
                      className={`dropdown-menu ${showDropdown === "admin-menu" || showDropdown === "user-menu" ? "show" : ""}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {currentUser.rol === "ADMIN" ? (
                        <>
                          <Link to="/admin">Panel Administrador</Link>
                          <Link to="/envios">Envios realizados</Link>
                          <Link to="/historial">Historial de ventas</Link>
                          <a href="#" onClick={logout}>Cerrar Sesión</a>
                        </>
                      ) : (
                        <>
                          <Link to="/perfil">Perfil</Link>
                          <Link to="/configuracion">Configuración</Link>
                          <a href="#" onClick={logout}>Cerrar sesión</a>
                        </>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 5. BOTÓN DEL CARRITO CONECTADO */}
            {/* 5. BOTÓN DEL CARRITO CONECTADO */}
            <button 
              className="cart-btn"
              onClick={toggleCarrito} 
            >
              🛒 Carrito (<span>{totalItems}</span>) 
            </button>
          </div>
        </div>
      </div>

      {/* ... (El resto de tu código de modales sigue igual) ... */}
      {(showLogin || showRegister) && (
        <div
          className="modal-overlay"
          onClick={closeForms}
        ></div>
      )}
      <div id="login-modal" className={`modal ${showLogin ? "show" : ""}`}>
        {/* ... (contenido modal login) ... */}
      </div>
      <div id="register-modal" className={`modal ${showRegister ? "show" : ""}`}>
        {/* ... (contenido modal registro) ... */}
      </div>
    </header>
  );
};

export default Navbar;