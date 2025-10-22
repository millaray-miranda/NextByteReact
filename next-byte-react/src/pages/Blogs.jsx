import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getAllBlogPosts, getRecentBlogPosts } from "../data/blogData";
import "../assets/css/blogs.css";

const Blogs = () => {
  const [email, setEmail] = useState("");
  const blogPosts = getAllBlogPosts();
  const entradasPopulares = getRecentBlogPosts(3);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`¡Gracias por suscribirte con: ${email}`);
      setEmail("");
    } else {
      alert("Por favor ingresa tu correo electrónico");
    }
  };

  const categorias = [
    { nombre: "Tecnología", cantidad: blogPosts.filter(post => post.categoria === "Tecnología").length },
    { nombre: "Gaming", cantidad: blogPosts.filter(post => post.categoria === "Gaming").length },
    { nombre: "Tutoriales", cantidad: blogPosts.filter(post => post.categoria === "Tutoriales").length },
    { nombre: "Reviews", cantidad: 15 },
    { nombre: "Novedades", cantidad: 10 }
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
                  <img src={post.imagenDestacada} alt={post.titulo} />
                  <div className="blog-fecha">{new Date(post.fecha).toLocaleDateString('es-ES')}</div>
                </div>
                <div className="blog-contenido">
                  <h2>{post.titulo}</h2>
                  <div className="blog-meta">
                    <span className="blog-autor">Por {post.autor}</span>
                    <span className="blog-categoria">{post.categoria}</span>
                  </div>
                  <p className="blog-resumen">{post.resumen}</p>
                  <Link to={`/blog/${post.slug}`} className="blog-leer-mas">
                    Leer más →
                  </Link>
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
                    <Link to={`/blog/categoria/${categoria.nombre.toLowerCase()}`}>
                      {categoria.nombre} <span className="cantidad">({categoria.cantidad})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="widget">
              <h3>Entradas Populares</h3>
              {entradasPopulares.map((entrada, index) => (
                <div key={index} className="entrada-popular">
                  <h4>
                    <Link to={`/blog/${entrada.slug}`}>{entrada.titulo}</Link>
                  </h4>
                  <span className="fecha-popular">
                    {new Date(entrada.fecha).toLocaleDateString('es-ES')}
                  </span>
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