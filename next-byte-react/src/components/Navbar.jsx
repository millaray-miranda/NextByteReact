import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// 1. IMPORTAR CONTEXTOS
import { useCarrito } from "../context/CarritoContext"; // <-- ¡Asegúrate que esta ruta sea correcta!
import { useAuth } from "../context/AuthContext";

import "../assets/css/nav-footer.css";
import logo from "../assets/img/logo.png";
import "../assets/css/home.css";
import "../assets/css/inicio-sesion.css";

const Navbar = () => {
  const navigate = useNavigate();

  const location = useLocation();

  // 2. USAR CONTEXTOS
  // Obtenemos el total de items y la función para mostrar/ocultar la vista previa
  const { totalItems, toggleCarrito } = useCarrito();
  const { currentUser, logout } = useAuth();

  // Ya no cargamos usuario local aquí; lo gestiona AuthContext

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Scope de navegación por página
  const pathname = location.pathname || "/";
  const inAdminArea = pathname.startsWith("/admin") || pathname.startsWith("/envios") || pathname.startsWith("/historial");
  const inPerfilArea = pathname.startsWith("/perfil");
  const inRoleScopedArea = inAdminArea || inPerfilArea;

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

          {/* 4. LINKS DE NAVEGACIÓN: público por defecto; si estás en páginas Admin/Perfil, mostrar menú por rol */}
          <nav className="main-nav">
            {!inRoleScopedArea && (
              <>
                <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
                <Link to="/productos" className={`nav-link ${isActive('/productos') ? 'active' : ''}`}>Productos</Link>
                <Link to="/nosotros" className={`nav-link ${isActive('/nosotros') ? 'active' : ''}`}>Nosotros</Link>
                <Link to="/blogs" className={`nav-link ${isActive('/blogs') ? 'active' : ''}`}>Blogs</Link>
                <Link to="/contacto" className={`nav-link ${isActive('/contacto') ? 'active' : ''}`}>Contacto</Link>
              </>
            )}

            {inAdminArea && currentUser?.role === "ADMIN" && (
              <>
                <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
                <Link to="/envios" className={`nav-link ${isActive('/envios') ? 'active' : ''}`}>Envíos</Link>
                <Link to="/historial" className={`nav-link ${isActive('/historial') ? 'active' : ''}`}>Historial</Link>
              </>
            )}

            {inPerfilArea && currentUser?.role === "USER" && (
              <>
                <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
                <Link to="/perfil/envios" className={`nav-link ${isActive('/perfil/envios') ? 'active' : ''}`}>Envíos</Link>
                <Link to="/perfil/historial" className={`nav-link ${isActive('/perfil/historial') ? 'active' : ''}`}>Historial</Link>
              </>
            )}
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
                    {currentUser.role === "ADMIN" ? "Admin" : "Perfil"}
                  </button>
                  <span className="separator">|</span>
                  <button className="auth-link" onClick={handleLogout}>Cerrar sesión</button>
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

      {/* Modales eliminados; usar página /login */}
    </header>
  );
};

export default Navbar;