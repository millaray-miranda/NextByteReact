import React from "react";
import "../assets/css/home.css";
import "../assets/css/login.css";
import "../assets/css/productos.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import fotoHome from "../assets/img/foto-home.png";
import fotoMonitor from "../assets/img/frontal-monitor.jpg";
import fotoTeclado from "../assets/img/teclado-ajazz.jpg";
import fotoMouse from "../assets/img/mouse.webp";
import tecladoPreview from "../assets/img/diferencias-tipos-switch-teclado-7.jpg";
import monitorPreview from "../assets/img/monitor-preview.webp";  

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
                                alt="Monitor Xiaomi G34WQi" />
                            <h3>Monitor Xiaomi G34WQi</h3>
                            <p class="producto-desc">Ultrawide 34" 144Hz para gaming inmersivo</p>
                            <p class="producto-precio">$195.990</p>
                            <a href="monitor.html" class="btn-producto">Ver Detalles</a>
                        </div>
                        <div class="producto-card">
                            <img src={fotoTeclado} alt="Teclado Ajazz AK820 Pro" />
                            <h3>ATTACK SHARK Ajazz AK820 Pro</h3>
                            <p class="producto-desc">Teclado mecánico 75% con switches hot-swap</p>
                            <p class="producto-precio">$99.990</p>
                            <a href="teclado.html" class="btn-producto">Ver Detalles</a>
                        </div>
                        <div class="producto-card">
                            <img src={fotoMouse} alt="Mouse Logitech G502" />
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

            {/* BANNER PROMOCIONAL */}
            <section class="banner-promocional">
                <div class="container">
                    <div class="banner-content">
                        <h2>🎉 Oferta Especial de Lanzamiento</h2>
                        <p>15% DE DESCUENTO en tu primera compra usando el código: <strong>NEXTBYTE15</strong></p>
                        <a href="#" class="btn-banner">Aprovechar Oferta</a>
                    </div>
                </div>
            </section>

            { /* TESTIMONIOS */}

            <section class="testimonios">
                <div class="container">
                    <h2>Lo que Dicen Nuestros Clientes</h2>
                    <div class="testimonios-grid">
                        <div class="testimonio-card">
                            <div class="testimonio-text">
                                <p>"Excelente servicio al cliente y productos de primera calidad. Mi nuevo monitor gaming superó
                                    todas mis expectativas."</p>
                            </div>
                            <div class="testimonio-autor">
                                <div>
                                    <h4>Carlos Martínez</h4>
                                    <span>Gamer Profesional</span>
                                </div>
                            </div>
                        </div>
                        <div class="testimonio-card">
                            <div class="testimonio-text">
                                <p>"La asesoría técnica que recibí fue invaluable. Me ayudaron a armar el setup perfecto para
                                    home office."</p>
                            </div>
                            <div class="testimonio-autor">
                                <div>
                                    <h4>Ana Rodríguez</h4>
                                    <span>Diseñadora Gráfica</span>
                                </div>
                            </div>
                        </div>
                        <div class="testimonio-card">
                            <div class="testimonio-text">
                                <p>"Entrega rápida y productos bien empaquetados. Los precios son los mejores que he encontrado
                                    en Chile."</p>
                            </div>
                            <div class="testimonio-autor">
                                <div>
                                    <h4>Javier Soto</h4>
                                    <span>Streamer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOGS PREVIEW*/}


            <section class="blog-preview">
                <div class="container">
                    <h2>Últimas del Blog</h2>
                    <div class="blog-grid">
                        <article class="blog-card">
                            <img src={tecladoPreview} alt="Guía Teclados Mecánicos"/>
                                <div class="blog-content">
                                    <h3>Guía Definitiva: Cómo Elegir tu Teclado Mecánico</h3>
                                    <p>Descubre todo lo que necesitas saber sobre switches, layouts y características para encontrar
                                        el teclado perfecto.</p>
                                    <a href="blog/guia-teclados-mecanicos.html" class="blog-link">Leer más →</a>
                                </div>
                        </article>
                        <article class="blog-card">
                            <img src={monitorPreview} alt="Monitores Gaming 2025"/>
                                <div class="blog-content">
                                    <h3>Top 5 Monitores Gaming 2025: Análisis Completo</h3>
                                    <p>Revisamos los mejores monitores del año para gaming competitivo y experiencias inmersivas.
                                    </p>
                                    <a href="blog/top-monitores-gaming-2025.html" class="blog-link">Leer más →</a>
                                </div>
                        </article>
                    </div>
                    <div class="text-center">
                        <a href="blogs.html" class="btn-ver-todos">Ver Todos los Artículos</a>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    );
}

export default Home;
