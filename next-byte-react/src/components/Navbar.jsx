import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";
import "../assets/css/nav-footer.css";
import logo from "../assets/img/logo.png";
import "../assets/css/home.css";
import "../assets/css/inicio-sesion.css";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(null);

  const location = useLocation();

  // Manejar posible error del contexto
  const carritoContext = useCarrito();
  const { totalItems = 0, toggleCarrito = () => {} } = carritoContext || {};

  // Cargar usuario al iniciar
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleShowRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const closeForms = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

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

  const registerUser = (e) => {
    e.preventDefault();
    const nombre = document.getElementById("register-nombre")?.value;
    const email = document.getElementById("register-email")?.value;
    const password = document.getElementById("register-password")?.value;

    if (nombre && email && password) {
      const newUser = {
        usuario: email,
        password: password,
        rol: "USER",
        nombre: nombre
      };
      
      alert("Usuario registrado exitosamente");
      closeForms();
      // Auto-login después del registro
      setCurrentUser(newUser);
      localStorage.setItem("currentUser", JSON.stringify(newUser));
    } else {
      alert("Por favor completa todos los campos");
    }
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setShowDropdown(null);
    alert("Sesión cerrada");
  };

  const toggleDropdown = (menuId) => {
    setShowDropdown(showDropdown === menuId ? null : menuId);
  };

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

          <nav className="main-nav">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/productos" className={`nav-link ${isActive('/productos') ? 'active' : ''}`}>
              Productos
            </Link>
            <Link to="/nosotros" className={`nav-link ${isActive('/nosotros') ? 'active' : ''}`}>
              Nosotros
            </Link>
            <Link to="/blogs" className={`nav-link ${isActive('/blogs') ? 'active' : ''}`}>
              Blogs
            </Link>
            <Link to="/contacto" className={`nav-link ${isActive('/contacto') ? 'active' : ''}`}>
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

            {/* Botón del carrito */}
            <button className="cart-btn" onClick={toggleCarrito}>
              🛒 Carrito (<span>{totalItems}</span>)
            </button>
          </div>
        </div>
      </div>

      {/* Overlay para modales */}
      {(showLogin || showRegister) && (
        <div className="modal-overlay" onClick={closeForms}></div>
      )}

      {/* Modal de Login */}
      <div id="login-modal" className={`modal ${showLogin ? "show" : ""}`}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>Iniciar Sesión</h2>
            <button className="close-button" onClick={closeForms}>
              ×
            </button>
          </div>
          <form onSubmit={loginUser}>
            <div className="form-group">
              <label htmlFor="login-usuario">Usuario:</label>
              <input 
                type="email" 
                id="login-usuario" 
                placeholder="admin@admin.cl o user@user.cl"
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="login-password">Contraseña:</label>
              <input 
                type="password" 
                id="login-password" 
                placeholder="1234"
                required 
              />
            </div>
            <button type="submit" className="btn-primary">Ingresar</button>
          </form>
          <p className="modal-switch">
            ¿No tienes cuenta? <button type="button" onClick={handleShowRegister}>Regístrate aquí</button>
          </p>
        </div>
      </div>

      {/* Modal de Registro */}
      <div id="register-modal" className={`modal ${showRegister ? "show" : ""}`}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>Registrarse</h2>
            <button className="close-button" onClick={closeForms}>
              ×
            </button>
          </div>
          <form onSubmit={registerUser}>
            <div className="form-group">
              <label htmlFor="register-nombre">Nombre completo:</label>
              <input 
                type="text" 
                id="register-nombre" 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="register-email">Email:</label>
              <input 
                type="email" 
                id="register-email" 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="register-password">Contraseña:</label>
              <input 
                type="password" 
                id="register-password" 
                required 
              />
            </div>
            <button type="submit" className="btn-primary">Registrarse</button>
          </form>
          <p className="modal-switch">
            ¿Ya tienes cuenta? <button type="button" onClick={handleShowLogin}>Inicia sesión aquí</button>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;