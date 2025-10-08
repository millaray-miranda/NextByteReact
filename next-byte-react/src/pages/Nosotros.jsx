import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/css/productos.css";
import "../assets/css/nav-footer.css";
import "../assets/css/login.css";
import "../assets/css/nosotros.css";
import "../assets/css/inicio-sesion.css";

// Importar imágenes
import logoEmpresa from "../assets/img/logo.png";
import historiaImagen from "../assets/img/imagen.jpg";
import millaray from "../assets/img/Millaray.png";
import sergio from "../assets/img/Sergio.png";
import diego from "../assets/img/Diego.png";

const Nosotros = () => {
  return (
    <div className="nosotros-page">
      {/* Navbar - Ya incluye el sistema de login/registro */}
      <Navbar />

      {/* Contenido principal de la página Nosotros */}
      <div className="nosotros-container">
        {/* Sección Hero */}
        <section className="hero-section">
          <h1>Conoce a NextByte</h1>
          <p>Tu partner tecnológico de confianza para llevar tu experiencia digital al siguiente nivel</p>
        </section>

        {/* Sección Historia */}
        <section className="historia-section">
          <h2 className="section-title">Nuestra Historia</h2>
          <div className="historia-content">
            <div className="historia-text">
              <p>
                NextByte nació en 2025 con la visión de revolucionar el mercado tecnológico chileno. Fundada por
                un grupo de apasionados por la tecnología, nuestra empresa comenzó como un pequeño
                emprendimiento con grandes sueños.
              </p>
              <p>
                Hoy, después de años de crecimiento y evolución, nos hemos consolidado como referentes en el
                sector, ofreciendo productos de alta calidad y un servicio excepcional que nos distingue de la
                competencia.
              </p>
              <p>
                Nuestro compromiso con la innovación y la satisfacción del cliente nos ha permitido expandirnos,
                llegando a miles de hogares y empresas en todo el país con soluciones tecnológicas que
                transforman la manera de trabajar, jugar y crear.
              </p>
            </div>
            <div className="historia-imagen">
              <img src={historiaImagen} alt="Historia de NextByte" />
            </div>
          </div>
        </section>

        {/* Sección Misión y Visión */}
        <section className="mision-vision">
          <div className="mision">
            <h3>Misión</h3>
            <p>
              Proveer soluciones tecnológicas innovadoras y de alta calidad que empoderen a nuestros clientes,
              mejorando su productividad, entretenimiento y calidad de vida a través de productos confiables y un
              servicio excepcional.
            </p>
          </div>
          <div className="vision">
            <h3>Visión</h3>
            <p>
              Ser la tienda de tecnología preferida en Chile, reconocida por nuestra innovación, compromiso con el
              cliente y contribución al desarrollo tecnológico del país, inspirando a una nueva generación de
              amantes de la tecnología.
            </p>
          </div>
        </section>

        {/* Sección Equipo */}
        <section className="equipo-section">
          <h2 className="section-title">Nuestro Equipo</h2>
          <div className="equipo-grid">
            <div className="miembro-equipo">
              <img src={millaray} alt="Millaray" className="miembro-imagen" />
              <div className="miembro-nombre">Millaray Miranda</div>
              <div className="miembro-cargo">CEO & Fundadora</div>
              <p>Apasionada por la tecnología y la innovación con más de 15 años de experiencia en el sector.</p>
            </div>
            <div className="miembro-equipo">
              <img src={sergio} alt="Sergio" className="miembro-imagen" />
              <div className="miembro-nombre">Sergio Soto</div>
              <div className="miembro-cargo">Director de Marketing</div>
              <p>Especialista en estrategias digitales y crecimiento de marcas en el ámbito tecnológico.</p>
            </div>
            <div className="miembro-equipo">
              <img src={diego} alt="Diego Sepúlveda" className="miembro-imagen" />
              <div className="miembro-nombre">Diego Sepúlveda</div>
              <div className="miembro-cargo">Jefe de Ventas</div>
              <p>
                Conoce cada producto como la palma de su mano y siempre encuentra la solución perfecta para cada
                cliente.
              </p>
            </div>
          </div>
        </section>

        {/* Sección Valores */}
        <section className="valores-section">
          <h2 className="section-title">Nuestros Valores</h2>
          <div className="valores-grid">
            <div className="valor-item">
              <div className="valor-icono">💡</div>
              <div className="valor-titulo">Innovación</div>
              <p>Buscamos constantemente nuevas formas de mejorar y estar a la vanguardia tecnológica.</p>
            </div>
            <div className="valor-item">
              <div className="valor-icono">🤝</div>
              <div className="valor-titulo">Confianza</div>
              <p>
                Construimos relaciones duraderas basadas en la honestidad y transparencia con nuestros clientes.
              </p>
            </div>
            <div className="valor-item">
              <div className="valor-icono">🚀</div>
              <div className="valor-titulo">Excelencia</div>
              <p>Nos esforzamos por superar expectativas en cada producto y servicio que ofrecemos.</p>
            </div>
            <div className="valor-item">
              <div className="valor-icono">❤️</div>
              <div className="valor-titulo">Pasión</div>
              <p>Amamos la tecnología y eso se refleja en nuestro trabajo y atención al cliente.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Nosotros;