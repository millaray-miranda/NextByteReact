import React from "react";
import "../assets/css/home.css";
import "../assets/css/nav-footer.css";
import "../assets/css/login.css";
import "../assets/css/productos.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import fotoHome from "../assets/img/foto-home.png";
import fotoMonitor from "../assets/img/frontal-monitor.jpg";
import fotoTeclado from "../assets/img/teclado-ajazz.jpg";
import fotoMouse from "../assets/img/mouse.webp";

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
                        src={fotoHome}
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
                        <a href="#" className="categoria-card">
                            <div className="categoria-icon">🖱️</div>
                            <h3>Mouses</h3>
                            <p>Precisión para gaming</p>

                        </a>
                        <a href="#" className="categoria-card">
                            <div className="categoria-icon">🎧</div>
                            <h3>Audio</h3>
                            <p>Audífonos y parlantes</p>
                        </a>
                    </div>
                </div>
            </section>

            {/* PRODUCTOS DESTACADOS*/}
            <section class="productos-destacados">
                <div class="container">
                    <h2>Productos Destacados</h2>
                    <div class="productos-grid">
                        <div class="producto-card">
                            <img 
                            src={fotoMonitor} 
                            alt="Monitor Xiaomi G34WQi"/>
                                <h3>Monitor Xiaomi G34WQi</h3>
                                <p class="producto-desc">Ultrawide 34" 144Hz para gaming inmersivo</p>
                                <p class="producto-precio">$195.990</p>
                                <a href="monitor.html" class="btn-producto">Ver Detalles</a>
                        </div>
                        <div class="producto-card">
                            <img src={fotoTeclado} alt="Teclado Ajazz AK820 Pro"/>
                                <h3>ATTACK SHARK Ajazz AK820 Pro</h3>
                                <p class="producto-desc">Teclado mecánico 75% con switches hot-swap</p>
                                <p class="producto-precio">$99.990</p>
                                <a href="teclado.html" class="btn-producto">Ver Detalles</a>
                        </div>
                        <div class="producto-card">
                            <img src={fotoMouse} alt="Mouse Logitech G502"/>
                                <h3>Logitech G502 Hero</h3>
                                <p class="producto-desc">Sensor HERO 25K, 11 botones programables</p>
                                <p class="producto-precio">$70.000</p>
                                <a href="mouse.html" class="btn-producto">Ver Detalles</a>
                        </div>
                    </div>
                    <div class="text-center">
                        <a href="productos.html" class="btn-ver-todos">Ver Todos los Productos</a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Home;
