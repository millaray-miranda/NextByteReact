import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// 1. IMPORTAR CONTEXTOS
import { useCarrito } from "../context/CarritoContext"; // <-- ¡Asegúrate que esta ruta sea correcta!
import { useAuth } from "../context/AuthContext";

import "../assets/css/nav-footer.css";
import logo from "../assets/img/logo.png";
import "../assets/css/home.css";
import "../assets/css/inicio-sesion.css"

const Navbar = () => {
  const navigate = useNavigate();

  // Obtener la ubicación actual para resaltar el link activo
  const location = useLocation();

  // 2. USAR CONTEXTOS
  // Obtenemos el total de items y la función para mostrar/ocultar la vista previa
  const { totalItems, toggleCarrito } = useCarrito();
  const { currentUser, logout } = useAuth();

  // Ya no cargamos usuario local aquí; lo gestiona AuthContext

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

  // Ir a página de login
  const handleShowLogin = () => {
    navigate("/login");
  };

  // Ir a página de registro (misma vista que login en modo registro)
  const handleShowRegister = () => {
    navigate("/register");
  };

  // Cerrar sesión
  const handleLogout = () => {
    logout();
  };

  // Dropdown removido; ahora usamos botón directo según rol

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
                <div className="user-actions-authenticated">
                  <button
                    className="auth-link user-nav"
                    title={currentUser.role === "ADMIN" ? "Ir a Admin" : "Ir a Perfil"}
                    onClick={() => navigate(currentUser.role === "ADMIN" ? "/admin" : "/perfil")}
                  >
                    {currentUser.name}
                  </button>
                  <span className="separator">|</span>
                  <button className="auth-link" onClick={handleLogout}>Cerrar sesión</button>
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

      {/* Modales eliminados; usar página /login */}
    </header>
  );
};

export default Navbar;