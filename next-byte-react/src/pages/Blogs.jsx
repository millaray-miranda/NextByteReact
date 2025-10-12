import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/css/blogs.css";

const Blogs = () => {
    const [email, setEmail] = useState("");

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (email) {
            alert(`¡Gracias por suscribirte con: ${email}`);
            setEmail("");
        } else {
            alert("Por favor ingresa tu correo electrónico");
        }
    };

    const blogPosts = [
        {
            id: 1,
            titulo: "Guía Definitiva: Cómo Elegir el Mejor Teclado Mecánico para tus Necesidades",            
            imagen: "../img/blogs/diferencias-tipos-switch-teclado-7.jpg",
            autor: "Por Millaray Miranda",
            categoria: "Tecnología",
            fecha: "10 Agosto 2025",
            resumen: "Los teclados mecánicos han revolucionado la experiencia de escritura y gaming. Pero con tantas opciones en el mercado, ¿cómo elegir el adecuado? En esta guía completa analizamos los diferentes tipos de switches, layouts y características que debes considerar antes de invertir en tu próximo teclado mecánico.",
            enlace: "/blog/guia-teclados-mecanicos",

            color: "#667eea"
        },
        {
            id: 2,
            titulo: "Top 5 Monitores Gaming 2025: Análisis y Comparativa",
            imagen: "../img/blogs/diferencias-tipos-switch-teclado-7.jpg",
            autor: "Por Sergio Soto",
            categoria: "Gaming",
            fecha: "15 Septiembre 2025",
            resumen: "El 2025 ha traído increíbles avances en tecnología de monitores gaming. Desde paneles OLED hasta tasas de refresco de 360Hz, te ayudamos a navegar entre las mejores opciones del mercado. Hemos testeado los modelos más populares para traerte un análisis honesto y recomendaciones según tu presupuesto y tipo de uso.",
            enlace: "/blog/top-monitores-gaming-2025",
            
            color: "#764ba2"
        },
        {
            id: 3,
            titulo: "Setup Perfecto: Cómo Organizar tu Espacio de Trabajo en Casa",
            imagen: "../img/blogs/diferencias-tipos-switch-teclado-7.jpg",
            autor: "Por Diego Sepúlveda",
            categoria: "Tutoriales",
            fecha: "22 Septiembre 2025",
            resumen: "El trabajo remoto llegó para quedarse y tener un espacio de trabajo ergonómico y productivo es esencial. Te mostramos cómo elegir los muebles adecuados, organizar tu iluminación y seleccionar los periféricos que realmente mejorarán tu productividad.",
            enlace: "/blog/setup-trabajo-casa",
            
            color: "#4CAF50"
        }
    ];

    const categorias = [
        { nombre: "Tecnología", cantidad: 12 },
        { nombre: "Gaming", cantidad: 8 },
        { nombre: "Reviews", cantidad: 15 },
        { nombre: "Tutoriales", cantidad: 6 },
        { nombre: "Novedades", cantidad: 10 }
    ];

    const entradasPopulares = [
        {
            titulo: "Cómo Optimizar tu Setup Gaming sin Gastar de Más",
            fecha: "10 Ene 2023",
            enlace: "/blog/optimizar-setup-gaming"
        },
        {
            titulo: "Windows 11 vs macOS: ¿Cuál es Mejor para Creativos?",
            fecha: "25 Dic 2022",
            enlace: "/blog/windows-macos-comparativa"
        },
        {
            titulo: "Los 5 Mejores Auriculares para Gaming del 2023",
            fecha: "15 Nov 2022",
            enlace: "/blog/mejores-auriculares-gaming"
        }
    ];

    return (
        <div className="blogs-page">
            <Navbar />

            <div className="blogs-container">
                {/* Sección Hero */}
                <section className="hero-blog">
                    <h1>Blog NextByte</h1>
                    <p>Descubre las últimas tendencias tecnológicas, reviews de productos y consejos para sacar el máximo provecho a tus dispositivos</p>
                </section>

                <div className="blog-layout">
                    {/* Sección de entradas del blog */}
                    <section className="entradas-blog">
                        {blogPosts.map((post) => (
                            <article key={post.id} className="entrada-blog">
                                <div className="blog-imagen">
                                    <div
                                        className="blog-imagen"
                                        style={{ imagen: `url(${post.imagen})` }}
                                    >
                                        <div className="blog-imagen-texto">
                                            {post.categoria}
                                        </div>
                                    </div>
                                    <div className="blog-fecha">{post.fecha}</div>
                                </div>
                                <div className="blog-contenido">
                                    <h2>{post.titulo}</h2>
                                    <div className="blog-meta">
                                        <span className="blog-autor">{post.autor}</span>
                                        <span className="blog-categoria">{post.categoria}</span>
                                    </div>
                                    <p className="blog-resumen">{post.resumen}</p>
                                    <a href={post.enlace} className="blog-leer-mas">Leer más →</a>
                                </div>
                            </article>
                        ))}
                    </section>

                    {/* Sidebar */}
                    <aside className="sidebar-blog">
                        <div className="widget">
                            <h3>Categorías</h3>
                            <ul className="categorias-lista">
                                {categorias.map((categoria, index) => (
                                    <li key={index}>
                                        <a href={`/blog/categoria/${categoria.nombre.toLowerCase()}`}>
                                            {categoria.nombre} <span className="cantidad">({categoria.cantidad})</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="widget">
                            <h3>Entradas Populares</h3>
                            {entradasPopulares.map((entrada, index) => (
                                <div key={index} className="entrada-popular">
                                    <h4>
                                        <a href={entrada.enlace}>{entrada.titulo}</a>
                                    </h4>
                                    <span className="fecha-popular">{entrada.fecha}</span>
                                </div>
                            ))}
                        </div>

                        <div className="widget">
                            <h3>Newsletter</h3>
                            <p>Suscríbete para recibir las últimas novedades y artículos exclusivos.</p>
                            <form className="form-newsletter" onSubmit={handleNewsletterSubmit}>
                                <input
                                    type="email"
                                    placeholder="Tu correo electrónico"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit">Suscribirme</button>
                            </form>
                        </div>
                    </aside>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Blogs;