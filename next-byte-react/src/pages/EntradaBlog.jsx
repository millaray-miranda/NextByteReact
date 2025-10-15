import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  obtenerPostPorSlug, 
  obtenerPostsRelacionados 
} from "../data/blogData";
import "../assets/css/entrada-blog.css";

const EntradaBlog = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [postsRelacionados, setPostsRelacionados] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const postEncontrado = obtenerPostPorSlug(slug);
    
    if (postEncontrado) {
      setPost(postEncontrado);
      
      // Obtener posts relacionados
      const relacionados = obtenerPostsRelacionados(
        postEncontrado.id, 
        postEncontrado.categoria
      );
      setPostsRelacionados(relacionados);
    } else {
      navigate("/blogs");
    }
    
    setCargando(false);
  }, [slug, navigate]);

  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleDateString('es-CL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (cargando) {
    return (
      <div className="entrada-blog-page">
        <Navbar />
        <div className="cargando">
          <p>Cargando entrada...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="entrada-blog-page">
        <Navbar />
        <div className="post-no-encontrado">
          <h2>Entrada no encontrada</h2>
          <p>La entrada que buscas no existe o ha sido removida.</p>
          <button onClick={() => navigate("/blogs")} className="btn-volver">
            Volver al blog
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="entrada-blog-page">
      <Navbar />
      
      <div className="entrada-blog-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link> &gt; 
          <Link to="/blogs">Blog</Link> &gt; 
          <span>{post.titulo}</span>
        </nav>

        {/* Header del post */}
        <article className="post-completo">
          <header className="post-header">
            {post.destacado && <div className="badge-destacado">Destacado</div>}
            <h1 className="post-titulo">{post.titulo}</h1>
            
            <div className="post-meta">
              <div className="meta-info">
                <div className="autor-info">
                  <span className="autor">Por {post.autor}</span>
                </div>
                <div className="fecha-info">
                  <span className="fecha">{formatearFecha(post.fecha)}</span>
                  <span className="tiempo-lectura">• {post.tiempoLectura} de lectura</span>
                </div>
              </div>
              <div className="categoria-badge">{post.categoria}</div>
            </div>

            <div className="post-resumen">
              <p>{post.resumen}</p>
            </div>
          </header>

          {/* Imagen destacada */}
          <div className="post-imagen-destacada">
            <img src={post.imagenPortada} alt={post.titulo} />
          </div>

          {/* Contenido del post */}
          <div className="post-contenido">
            <div 
              className="contenido-html"
              dangerouslySetInnerHTML={{ __html: post.contenido }}
            />
          </div>

          {/* Tags */}
          <footer className="post-footer">
            <div className="post-tags">
              <h3>Etiquetas:</h3>
              <div className="tags-list">
                {post.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="post-stats">
              <span className="vistas">{post.vistas} vistas</span>
            </div>
          </footer>
        </article>

        {/* Posts relacionados */}
        {postsRelacionados.length > 0 && (
          <section className="posts-relacionados">
            <h2>Entradas Relacionadas</h2>
            <div className="relacionados-grid">
              {postsRelacionados.map(postRel => (
                <article key={postRel.id} className="post-relacionado">
                  <Link to={`/blog/${postRel.slug}`}>
                    <img src={postRel.imagenPortada} alt={postRel.titulo} />
                    <div className="post-relacionado-content">
                      <h3>{postRel.titulo}</h3>
                      <div className="post-rel-meta">
                        <span className="post-rel-autor">{postRel.autor}</span>
                        <span className="post-rel-fecha">{postRel.fechaFormateada}</span>
                      </div>
                      <p className="post-rel-resumen">{postRel.resumen}</p>
                      <span className="leer-mas">Leer más →</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* CTA Newsletter */}
        <section className="newsletter-cta">
          <div className="newsletter-content">
            <h2>¿Te gustó este artículo?</h2>
            <p>Suscríbete a nuestro newsletter para recibir más contenido como este directamente en tu email.</p>
            <form className="form-newsletter">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                required 
              />
              <button type="submit">Suscribirme</button>
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default EntradaBlog;