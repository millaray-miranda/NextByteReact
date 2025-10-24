import React from "react";
import "../assets/css/home.css";
import "../assets/css/login.css";
import "../assets/css/productos.css";
import { Link } from "react-router-dom"; // Importar Link

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
                        <Link to="/products" className="btn-primary">Ver Productos</Link>
                        <Link to="/nosotros" className="btn-secondary">Conócenos</Link>
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
                        <Link to="/products?categoria=monitores" className="categoria-card">
                            <div className="categoria-icon">🖥️</div>
                            <h3>Monitores</h3>
                            <p>Desde 240Hz hasta 4K OLED</p>
                        </Link>
                        <Link to="/products?categoria=teclados" className="categoria-card">
                            <div className="categoria-icon">⌨️</div>
                            <h3>Teclados</h3>
                            <p>Mecánicos y membrane</p>
                        </Link>
                        <Link to="/products?categoria=mouses" className="categoria-card">
                            <div className="categoria-icon">🖱️</div>
                            <h3>Mouses</h3>
                            <p>Precisión para gaming</p>
                        </Link>
                        <Link to="/products?categoria=audio" className="categoria-card">
                            <div className="categoria-icon">🎧</div>
                            <h3>Audio</h3>
                            <p>Audífonos y parlantes</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* PRODUCTOS DESTACADOS*/}
            <section className="productos-destacados">
                <div className="container">
                    <h2>Productos Destacados</h2>
                    <div className="productos-grid">
                        <div className="producto-card">
                            <img
                                src={fotoMonitor}
                                alt="Monitor Xiaomi G34WQi" />
                            <h3>Monitor Xiaomi G34WQi</h3>
                            <p className="producto-desc">Ultrawide 34" 144Hz para gaming inmersivo</p>
                            <p className="producto-precio">$195.990</p>
                            <Link to="/producto/1" className="btn-producto">Ver Detalles</Link>
                        </div>
                        <div className="producto-card">
                            <img src={fotoTeclado} alt="Teclado Ajazz AK820" />
                            <h3>ATTACK SHARK Ajazz AK820</h3>
                            <p className="producto-desc">Teclado mecánico 75% con switches hot-swap</p>
                            <p className="producto-precio">$99.990</p>
                            <Link to="/producto/2" className="btn-producto">Ver Detalles</Link>
                        </div>
                        <div className="producto-card">
                            <img src={fotoMouse} alt="Mouse Logitech G502" />
                            <h3>Logitech G502 Hero</h3>
                            <p className="producto-desc">Sensor HERO 25K, 11 botones programables</p>
                            <p className="producto-precio">$70.000</p>
                            <Link to="/producto/3" className="btn-producto">Ver Detalles</Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <Link to="/products" className="btn-ver-todos">Ver Todos los Productos</Link>
                    </div>
                </div>
            </section>

            {/* BANNER PROMOCIONAL */}
            <section className="banner-promocional">
                <div className="container">
                    <div className="banner-content">
                        <h2>🎉 Oferta Especial de Lanzamiento</h2>
                        <p>15% DE DESCUENTO en tu primera compra usando el código: <strong>NEXTBYTE15</strong></p>
                        <Link to="/products" className="btn-banner">Aprovechar Oferta</Link>
                    </div>
                </div>
            </section>

            {/* TESTIMONIOS */}
            <section className="testimonios">
                <div className="container">
                    <h2>Lo que Dicen Nuestros Clientes</h2>
                    <div className="testimonios-grid">
                        <div className="testimonio-card">
                            <div className="testimonio-text">
                                <p>"Excelente servicio al cliente y productos de primera calidad. Mi nuevo monitor gaming superó
                                    todas mis expectativas."</p>
                            </div>
                            <div className="testimonio-autor">
                                <div>
                                    <h4>Carlos Martínez</h4>
                                    <span>Gamer Profesional</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonio-card">
                            <div className="testimonio-text">
                                <p>"La asesoría técnica que recibí fue invaluable. Me ayudaron a armar el setup perfecto para
                                    home office."</p>
                            </div>
                            <div className="testimonio-autor">
                                <div>
                                    <h4>Ana Rodríguez</h4>
                                    <span>Diseñadora Gráfica</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonio-card">
                            <div className="testimonio-text">
                                <p>"Entrega rápida y productos bien empaquetados. Los precios son los mejores que he encontrado
                                    en Chile."</p>
                            </div>
                            <div className="testimonio-autor">
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
            <section className="blog-preview">
                <div className="container">
                    <h2>Últimas del Blog</h2>
                    <div className="blog-grid">
                        <article className="blog-card">
                            <img src={tecladoPreview} alt="Guía Teclados Mecánicos"/>
                            <div className="blog-content">
                                <h3>Guía Definitiva: Cómo Elegir tu Teclado Mecánico</h3>
                                <p>Descubre todo lo que necesitas saber sobre switches, layouts y características para encontrar
                                    el teclado perfecto.</p>
                                <Link to="/blog/guia-teclados-mecanicos" className="blog-link">Leer más →</Link>
                            </div>
                        </article>
                        <article className="blog-card">
                            <img src={monitorPreview} alt="Monitores Gaming 2025"/>
                            <div className="blog-content">
                                <h3>Top 5 Monitores Gaming 2025: Análisis Completo</h3>
                                <p>Revisamos los mejores monitores del año para gaming competitivo y experiencias inmersivas.
                                </p>
                                <Link to="/blog/top-monitores-gaming-2025" className="blog-link">Leer más →</Link>
                            </div>
                        </article>
                    </div>
                    <div className="text-center">
                        <Link to="/blogs" className="btn-ver-todos">Ver Todos los Artículos</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Home;