import React from "react";
import "../assets/css/home.css";
import "../assets/css/nav-footer.css";
import "../assets/css/login.css";
import "../assets/css/productos.css";

import logo from "../assets/img/logo.png"; // reemplaza con tu ruta real

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
    <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>La Tecnología del Futuro, Hoy</h1>
          <p>
            Descubre los mejores productos tecnológicos para gaming, oficina y
            entretenimiento con los precios más competitivos del mercado.
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn-primary">Ver Productos</a>
            <a href="#" className="btn-secondary">Conócenos</a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="imagenes/newslarge_20220504140959_Best-Products-for-an-Aesthetic-Gaming-Set-Up.jpg"
            alt="Setup Gaming NextByte"
          />
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="categorias">
        <div className="container">
          <h2>Categorías Destacadas</h2>
          <div className="categorias-grid">
            <a href="#" className="categoria-card">
              <div className="categoria-icon">🖥️</div>
              <h3>Monitores</h3>
              <p>Desde 240Hz hasta 4K OLED</p>
            </a>
            <a href="#" className="categoria-card">
              <div className="categoria-icon">⌨️</div>
              <h3>Teclados</h3>
              <p>Mecánicos y membrane</p>
            </a>
          </div>
        </div>
      </section>

     <Footer />
    </>
  );
}

export default Home;
