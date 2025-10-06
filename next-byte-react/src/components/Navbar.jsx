import React from "react";
import "../assets/css/nav-footer.css";
import logo from "../assets/img/logo.png"; // cambia la ruta si tu logo está en otra carpeta

const Navbar = () => {
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
            <button className="cart-btn">
              🛒 Carrito (<span>0</span>)
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
