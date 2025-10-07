import React, { useState, useEffect } from "react";
import "../assets/css/nav-footer.css";
import logo from "../assets/img/logo.png"; 
import "../assets/css/home.css";
import "../assets/css/inicio-sesion.css"

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(null);

  // Cargar usuario al iniciar
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

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

    // Usuarios de prueba
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
            <img src={logo} alt="NextByte Logo" className="logo-empresa" />
          </div>

          <nav className="main-nav">
            <a href="#" className="nav-link active">Home</a>
            <a href="#" className="nav-link">Productos</a>
            <a href="#" className="nav-link">Nosotros</a>
            <a href="#" className="nav-link">Blogs</a>
            <a href="#" className="nav-link">Contacto</a>
          </nav>

          <div className="header-actions">
            {/* User Actions */}
            <div className="user-actions">
              {!currentUser ? (
                <>
                  <button className="user-link" onClick={handleShowLogin}>
                    Iniciar sesión
                  </button>
                  <span className="separator">|</span>
                  <button className="user-link" onClick={handleShowRegister}>
                    Registrarse
                  </button>
                </>
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
                          <a href="admin.html">Panel Administrador</a>
                          <a href="envios.html">Envios realizados</a>
                          <a href="historial.html">Historial de ventas</a>
                          <a href="#" onClick={logout}>Cerrar Sesión</a>
                        </>
                      ) : (
                        <>
                          <a href="#">Perfil</a>
                          <a href="#">Configuración</a>
                          <a href="#" onClick={logout}>Cerrar sesión</a>
                        </>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            <button className="cart-btn">
              🛒 Carrito (<span>0</span>)
            </button>
          </div>
        </div>
      </div>

      {/* Fondo oscuro */}
      {(showLogin || showRegister) && (
        <div 
          className="modal-overlay" 
          onClick={closeForms}
        ></div>
      )}

      {/* Modal Login */}
      <div id="login-modal" className={`modal ${showLogin ? "show" : ""}`}>
        <button className="close-btn" onClick={closeForms}>×</button>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={loginUser}>
          <input 
            type="text" 
            id="login-usuario" 
            placeholder="Usuario" 
            required 
          />
          <input 
            type="password" 
            id="login-password" 
            placeholder="Contraseña" 
            required 
          />
          <button type="submit">Entrar</button>
        </form>
        <p>
          ¿No tienes cuenta?{" "}
          <span className="switch" onClick={handleShowRegister}>
            Regístrate
          </span>
        </p>
      </div>

      {/* Modal Registro */}
      <div id="register-modal" className={`modal ${showRegister ? "show" : ""}`}>
        <button className="close-btn" onClick={closeForms}>×</button>
        <h2>Registrarse</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Nombre completo" required />
          <input type="email" placeholder="Correo electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <button type="submit">Registrarse</button>
        </form>
        <p>
          ¿Ya tienes cuenta?{" "}
          <span className="switch" onClick={handleShowLogin}>
            Inicia sesión
          </span>
        </p>
      </div>
    </header>
  );
};

export default Navbar;