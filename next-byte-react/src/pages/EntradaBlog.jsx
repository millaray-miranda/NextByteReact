import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getBlogPostBySlug } from "../data/blogData";
import "../assets/css/blog-individual.css";

const EntradaBlog = () => {
  const { slug } = useParams();
  const [comentario, setComentario] = useState({
    nombre: "",
    email: "",
    texto: ""
  });

  // Obtener la entrada del blog usando la función del archivo de datos
  const entrada = getBlogPostBySlug(slug);

  if (!entrada) {
    return (
      <div className="blog-individual-container">
        <Navbar />
        <div className="entrada-no-encontrada">
          <h2>Entrada de blog no encontrada</h2>
          <Link to="/blogs" className="btn-volver">Volver al blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleComentarioChange = (e) => {
    const { name, value } = e.target;
    setComentario(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEnviarComentario = (e) => {
    e.preventDefault();
    alert("¡Comentario enviado! (En una aplicación real, esto se enviaría a una base de datos)");
    setComentario({ nombre: "", email: "", texto: "" });
  };

  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="blog-individual-container">
      <Navbar />
      
      <div className="blog-individual-content">
        {/* Cabecera del artículo */}
        <header className="blog-header">
          <div className="blog-breadcrumb">
            <Link to="/blogs">Blog</Link> <Link to={`/blog/categoria/${entrada.categoria.toLowerCase()}`}>{entrada.categoria}</Link> {entrada.titulo}
          </div>
          <h1>{entrada.titulo}</h1>
          <div className="blog-meta-header">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" 
              alt={entrada.autor}
              className="autor-avatar"
            />
            <div className="meta-info">
              <span className="autor-nombre">Por {entrada.autor}</span>
              <span className="fecha-publicacion">{formatearFecha(entrada.fecha)}</span>
              <span className="tiempo-lectura">{entrada.tiempoLectura}</span>
            </div>
            <div className="redes-sociales">
              <span>Compartir:</span>
              <a href="#" className="social-icon">📱</a>
              <a href="#" className="social-icon">💬</a>
              <a href="#" className="social-icon">📧</a>
            </div>
          </div>
        </header>

        {/* Imagen destacada */}
        <div className="blog-imagen-destacada">
          <img src={entrada.imagenDestacada} alt={entrada.titulo} />
        </div>

        {/* Contenido del artículo */}
        <article className="blog-contenido">
          {/* Contenido principal */}
          <div dangerouslySetInnerHTML={{ __html: entrada.contenido }} />

          {/* Comparación de switches (solo si existe en los datos) */}
          {entrada.switches && (
            <>
              <div className="switch-comparacion">
                {entrada.switches.map((switchItem, index) => (
                  <div key={index} className="switch-tipo">
                    <h3>{switchItem.tipo}</h3>
                    <img src={switchItem.imagen} alt={switchItem.tipo} />
                    <p>{switchItem.descripcion}</p>
                    <span className="switch-ejemplo">Ejemplos: {switchItem.ejemplos}</span>
                  </div>
                ))}
              </div>

              {/* Tabla de tamaños (solo si existe en los datos) */}
              {entrada.tamanos && (
                <>
                  <h2>Tamaños y Layouts</h2>
                  <p>Los teclados mecánicos vienen en varios tamaños. Elige según tus necesidades de espacio y funcionalidad:</p>
                  
                  <div className="tabla-tamanos">
                    <div className="fila-titulo">
                      <div>Tamaño</div>
                      <div>Teclas</div>
                      <div>Ventajas</div>
                      <div>Recomendado para</div>
                    </div>
                    {entrada.tamanos.map((tamano, index) => (
                      <div key={index} className="fila-datos">
                        <div>{tamano.tamaño}</div>
                        <div>{tamano.teclas}</div>
                        <div>{tamano.ventajas}</div>
                        <div>{tamano.recomendado}</div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Recomendaciones (solo si existe en los datos) */}
              {entrada.recomendaciones && (
                <>
                  <h2>Nuestras Recomendaciones</h2>
                  {entrada.recomendaciones.map((recomendacion, index) => (
                    <div key={index} className="recomendacion-producto">
                      <img src={recomendacion.imagen} alt={recomendacion.nombre} />
                      <div className="recomendacion-info">
                        <h3>{recomendacion.nombre}</h3>
                        <p>{recomendacion.descripcion}</p>
                        <Link to={recomendacion.enlace} className="btn-ver-producto">
                          Ver producto
                        </Link>
                      </div>
                    </div>
                  ))}
                </>
              )}

              {/* Consejo destacado */}
              <div className="consejo-destacado">
                <h3>💡 Consejo Profesional</h3>
                <p>Si es tu primer teclado mecánico, considera un kit de prueba de switches antes de comprar. Muchas tiendas especializadas ofrecen muestras de diferentes switches para que encuentres el que mejor se adapte a tu estilo.</p>
              </div>
            </>
          )}

          {/* Footer del artículo */}
          <div className="blog-footer">
            <div className="etiquetas">
              <span>Etiquetas:</span>
              {entrada.etiquetas.map((etiqueta, index) => (
                <a key={index} href={`/blog/etiqueta/${etiqueta}`}>
                  {etiqueta}
                </a>
              ))}
            </div>
            <div className="redes-sociales-footer">
              <span>Comparte este artículo:</span>
              <a href="#" className="social-btn">Facebook</a>
              <a href="#" className="social-btn">Twitter</a>
              <a href="#" className="social-btn">LinkedIn</a>
            </div>
          </div>
        </article>

        {/* Sección de comentarios */}
        <section className="seccion-comentarios">
          <h2>Comentarios (3)</h2>
          <div className="comentarios-lista">
            <div className="comentario">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                alt="Carlos López"
                className="avatar-usuario"
              />
              <div className="comentario-contenido">
                <div className="comentario-header">
                  <span className="nombre-usuario">Carlos López</span>
                  <span className="fecha-comentario">Hace 2 días</span>
                </div>
                <p>Excelente guía. Justo estaba buscando mi primer teclado mecánico y esta información es invaluable. ¿Recomiendan algún switch específico para programación?</p>
                <button className="btn-respuesta">Responder</button>
              </div>
            </div>
            <div className="comentario">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" 
                alt="María González"
                className="avatar-usuario"
              />
              <div className="comentario-contenido">
                <div className="comentario-header">
                  <span className="nombre-usuario">María González</span>
                  <span className="fecha-comentario">Hace 5 días</span>
                </div>
                <p>Llevo usando teclados mecánicos por 5 años y esta guía cubre todos los puntos importantes. Solo añadiría que los switches silent red son excelentes para oficinas.</p>
                <button className="btn-respuesta">Responder</button>
              </div>
            </div>
          </div>

          <form className="formulario-comentario" onSubmit={handleEnviarComentario}>
            <h3>Deja tu comentario</h3>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input 
                type="text" 
                id="nombre" 
                name="nombre"
                value={comentario.nombre}
                onChange={handleComentarioChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={comentario.email}
                onChange={handleComentarioChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="texto">Comentario</label>
              <textarea 
                id="texto" 
                name="texto"
                rows="5" 
                value={comentario.texto}
                onChange={handleComentarioChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-enviar-comentario">
              Publicar comentario
            </button>
          </form>
        </section>

        {/* Artículos relacionados */}
        <section className="articulos-relacionados">
          <h2>Artículos Relacionados</h2>
          <div className="relacionados-grid">
            {entrada.articulosRelacionados.map((articulo, index) => (
              <article key={index} className="articulo-relacionado">
                <img src={articulo.imagen} alt={articulo.titulo} />
                <h3>{articulo.titulo}</h3>
                <Link to={articulo.enlace}>Leer más →</Link>
              </article>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default EntradaBlog;