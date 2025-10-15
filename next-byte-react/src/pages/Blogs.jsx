import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/css/blogs.css";

// Importar datos del blog
import { 
  blogPosts, 
  categoriasBlog 
} from "../data/blogData";

const Blogs = () => {
  const [email, setEmail] = useState("");
  const [categoriaActiva, setCategoriaActiva] = useState("todos");
  const [postsFiltrados, setPostsFiltrados] = useState(blogPosts);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`¡Gracias por suscribirte con: ${email}`);
      setEmail("");
    } else {
      alert("Por favor ingresa tu correo electrónico");
    }
  };

  const filtrarPorCategoria = (categoriaId) => {
    setCategoriaActiva(categoriaId);
    if (categoriaId === 'todos') {
      setPostsFiltrados(blogPosts);
    } else {
      const filtrados = blogPosts.filter(post => post.categoria === categoriaId);
      setPostsFiltrados(filtrados);
    }
  };

  // Entradas populares (las más vistas)
  const entradasPopulares = [...blogPosts]
    .sort((a, b) => b.vistas - a.vistas)
    .slice(0, 3);

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
            {/* Filtros de categoría */}
            <div className="filtros-blog">
              <h3>Filtrar por categoría:</h3>
              <div className="categorias-filtro">
                {categoriasBlog.map(categoria => (
                  <button
                    key={categoria.id}
                    className={`categoria-btn ${categoriaActiva === categoria.id ? 'active' : ''}`}
                    onClick={() => filtrarPorCategoria(categoria.id)}
                  >
                    {categoria.nombre}
                  </button>
                ))}
              </div>
            </div>

            {/* Lista de posts */}
            <div className="posts-list">
              {postsFiltrados.map(post => (
                <article key={post.id} className="entrada-blog">
                  <div className="blog-imagen">
                    <img src={post.imagenPortada} alt={post.titulo} />
                    <div className="blog-fecha">{post.fechaFormateada}</div>
                    {post.destacado && <div className="blog-destacado">Destacado</div>}
                  </div>
                  <div className="blog-contenido">
                    <div className="blog-categoria">{post.categoria}</div>
                    <h2>
                      <Link to={`/blog/${post.slug}`}>
                        {post.titulo}
                      </Link>
                    </h2>
                    <div className="blog-meta">
                      <span className="blog-autor">Por {post.autor}</span>
                      <span className="blog-tiempo">{post.tiempoLectura} de lectura</span>
                      <span className="blog-vistas">{post.vistas} vistas</span>
                    </div>
                    <p className="blog-resumen">{post.resumen}</p>
                    <div className="blog-tags">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="blog-tag">#{tag}</span>
                      ))}
                    </div>
                    <Link to={`/blog/${post.slug}`} className="blog-leer-mas">
                      Leer más →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Mensaje si no hay posts */}
            {postsFiltrados.length === 0 && (
              <div className="no-posts">
                <p>No se encontraron entradas en esta categoría.</p>
                <button 
                  onClick={() => filtrarPorCategoria('todos')}
                  className="btn-ver-todos"
                >
                  Ver todas las entradas
                </button>
              </div>
            )}
          </section>

          {/* Sidebar */}
          <aside className="sidebar-blog">
            <div className="widget">
              <h3>Categorías</h3>
              <ul className="categorias-lista">
                {categoriasBlog.map((categoria, index) => (
                  <li key={index}>
                    <button 
                      className={`categoria-sidebar ${categoriaActiva === categoria.id ? 'active' : ''}`}
                      onClick={() => filtrarPorCategoria(categoria.id)}
                    >
                      {categoria.nombre}
                      <span className="cantidad">
                        ({blogPosts.filter(post => categoria.id === 'todos' || post.categoria === categoria.id).length})
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="widget">
              <h3>Entradas Populares</h3>
              {entradasPopulares.map((entrada, index) => (
                <div key={entrada.id} className="entrada-popular">
                  <Link to={`/blog/${entrada.slug}`}>
                    <h4>{entrada.titulo}</h4>
                  </Link>
                  <div className="popular-meta">
                    <span className="fecha-popular">{entrada.fechaFormateada}</span>
                    <span className="vistas-popular">{entrada.vistas} vistas</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="widget">
              <h3>Tags Populares</h3>
              <div className="tags-populares">
                {[...new Set(blogPosts.flatMap(post => post.tags))]
                  .slice(0, 10)
                  .map((tag, index) => (
                    <span key={index} className="tag-popular">#{tag}</span>
                  ))
                }
              </div>
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

            <div className="widget">
              <h3>Sobre el Blog</h3>
              <p>En NextByte Blog compartimos nuestra pasión por la tecnología, ofreciendo reviews honestas, tutoriales prácticos y las últimas novedades del mundo tech.</p>
              <div className="blog-stats">
                <div className="stat">
                  <strong>{blogPosts.length}+</strong>
                  <span>Artículos</span>
                </div>
                <div className="stat">
                  <strong>{blogPosts.reduce((acc, post) => acc + post.vistas, 0)}+</strong>
                  <span>Vistas</span>
                </div>
                <div className="stat">
                  <strong>{new Set(blogPosts.map(post => post.autor)).size}</strong>
                  <span>Autores</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;