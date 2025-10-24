import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/css/contacto.css";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: ""
  });
  const [faqActive, setFaqActive] = useState(null);

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.nombre || !formData.email || !formData.asunto || !formData.mensaje) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }
    
    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return;
    }
    
    // Simulación de envío
    alert('¡Mensaje enviado con éxito! Te contactaremos pronto.');
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      asunto: "",
      mensaje: ""
    });
  };

  // Manejar FAQ
  const toggleFaq = (index) => {
    setFaqActive(faqActive === index ? null : index);
  };

  // Animación de entrada para los elementos de información
  useEffect(() => {
    const infoItems = document.querySelectorAll('.info-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    infoItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const faqItems = [
    {
      pregunta: "¿Cuál es el tiempo de entrega de los productos?",
      respuesta: "El tiempo de entrega depende de tu ubicación. En Santiago entregamos en 24-48 horas hábiles. Para regiones, el plazo es de 3-5 días hábiles. Los productos con stock disponible se despachan el mismo día si la compra se realiza antes de las 14:00 hrs."
    },
    {
      pregunta: "¿Ofrecen garantía en sus productos?",
      respuesta: "Sí, todos nuestros productos incluyen garantía del fabricante. La duración varía según el producto (generalmente 1-3 años). Te proporcionamos el soporte necesario para gestionar cualquier garantía directamente con el fabricante."
    },
    {
      pregunta: "¿Hacen envíos a regiones?",
      respuesta: "Sí, realizamos envíos a todo Chile a través de Starken y Chilexpress. Los costos de envío varían según la ubicación y el peso del paquete. Puedes calcular el costo exacto durante el proceso de compra."
    },
    {
      pregunta: "¿Tienen tienda física?",
      respuesta: "Sí, nuestra tienda física está ubicada en Av. Tecnológica 1234, Santiago Centro. Puedes visitarnos de lunes a viernes de 9:00 a 19:00 hrs y sábados de 10:00 a 14:00 hrs."
    }
  ];

  return (
    <div className="contacto-page">
      <Navbar />
      
      <div className="contacto-container">
        {/* Hero Section */}
        <section className="contacto-hero">
          <h1>Contáctanos</h1>
          <p>Estamos aquí para ayudarte. Escríbenos y te responderemos a la brevedad.</p>
        </section>

        <div className="contacto-content">
          {/* Información de contacto */}
          <div className="contacto-info">
            <h2>Información de Contacto</h2>
            
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3>Dirección</h3>
                <p>Av. Tecnológica 1234, Santiago Centro<br />Región Metropolitana, Chile</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h3>Teléfonos</h3>
                <p>Ventas: +56 2 2345 6789<br />Soporte: +56 2 2345 6790</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-content">
                <h3>Email</h3>
                <p>ventas@nextbyte.cl<br />soporte@nextbyte.cl</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div className="info-content">
                <h3>Horario de Atención</h3>
                <p>Lunes a Viernes: 9:00 - 19:00 hrs<br />Sábados: 10:00 - 14:00 hrs<br />Domingos: Cerrado</p>
              </div>
            </div>

            <div className="redes-sociales-contacto">
              <h3>Síguenos en:</h3>
              <div className="social-icons">
                <button type="button" className="social-link" aria-label="Facebook">📘 Facebook</button>
                <button type="button" className="social-link" aria-label="Instagram">📷 Instagram</button>
                <button type="button" className="social-link" aria-label="Twitter">🐦 Twitter</button>
                <button type="button" className="social-link" aria-label="LinkedIn">💼 LinkedIn</button>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="contacto-form">
            <h2>Envíanos un Mensaje</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre completo *</label>
                <input 
                  type="text" 
                  id="nombre" 
                  name="nombre" 
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo electrónico *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input 
                  type="tel" 
                  id="telefono" 
                  name="telefono" 
                  value={formData.telefono}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="asunto">Asunto *</label>
                <select 
                  id="asunto" 
                  name="asunto" 
                  value={formData.asunto}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="consulta">Consulta general</option>
                  <option value="soporte">Soporte técnico</option>
                  <option value="ventas">Consulta de ventas</option>
                  <option value="garantia">Reclamo o garantía</option>
                  <option value="distribuidor">Ser distribuidor</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje *</label>
                <textarea 
                  id="mensaje" 
                  name="mensaje" 
                  rows="5" 
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-enviar">Enviar mensaje</button>
            </form>
          </div>
        </div>

        {/* Mapa de ubicación */}
        <section className="mapa-section">
          <h2>Nuestra Ubicación</h2>
          <div className="mapa-container">
            <div className="mapa">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.396036455466!2d-70.65000032379907!3d-33.44343597366855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a5e0e5c0a1%3A0x1c2e3e4f5d6e7f8!2sAv.%20Tecnol%C3%B3gica%201234%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1690835200000!5m2!1ses!2scl" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de NextByte"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section className="faq-section">
          <h2>Preguntas Frecuentes</h2>
          <div className="faq-container">
            {faqItems.map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className="faq-pregunta"
                  onClick={() => toggleFaq(index)}
                  type="button"
                >
                  {faq.pregunta}
                  <span className="faq-icon">
                    {faqActive === index ? '−' : '+'}
                  </span>
                </button>
                <div className={`faq-respuesta ${faqActive === index ? 'active' : ''}`}>
                  <p>{faq.respuesta}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contacto;