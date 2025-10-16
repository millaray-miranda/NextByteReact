export const blogPosts = [
  {
    id: 1,
    slug: "guia-teclados-mecanicos",
    titulo: "Guía Definitiva: Cómo Elegir el Mejor Teclado Mecánico para tus Necesidades",
    autor: "Millaray Miranda",
    fecha: "10 Agosto 2025",
    categoria: "Tecnología",
    tiempoLectura: "8 min de lectura",
    imagenDestacada: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800&h=400&fit=crop",
    imagenes: [
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=400&fit=crop"
    ],
    descripcion: "Los teclados mecánicos han revolucionado la experiencia de escritura y gaming. Pero con tantas opciones en el mercado, ¿cómo elegir el adecuado?",
    contenido: `
      <h2>¿Por qué Elegir un Teclado Mecánico?</h2>
      <p>Los teclados mecánicos ofrecen una experiencia táctil superior gracias a sus interruptores individuales debajo de cada tecla. A diferencia de los teclados de membrana, proporcionan:</p>
      <ul>
        <li>Mayor durabilidad (50-100 millones de pulsaciones)</li>
        <li>Mejor retroalimentación táctil y auditiva</li>
        <li>Actuación más consistente en todas las teclas</li>
        <li>Personalización avanzada con keycaps intercambiables</li>
      </ul>

      <h2>Tipos de Switches: El Corazón de tu Teclado</h2>
      <p>La elección del switch es la decisión más importante al comprar un teclado mecánico. Existen tres categorías principales:</p>
    `,
    caracteristicas: [
      "Switches individuales por tecla",
      "Durabilidad superior",
      "Retroalimentación táctil",
      "Personalización avanzada"
    ],
    etiquetas: ["teclados mecánicos", "gaming", "tecnología", "periféricos"],
    productosRecomendados: [2, 7],
    comentarios: [
      {
        id: 1,
        autor: "Carlos López",
        fecha: "Hace 2 días",
        contenido: "Excelente guía. Justo estaba buscando mi primer teclado mecánico y esta información es invaluable. ¿Recomiendan algún switch específico para programación?",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face"
      },
      {
        id: 2,
        autor: "María González",
        fecha: "Hace 5 días",
        contenido: "Llevo usando teclados mecánicos por 5 años y esta guía cubre todos los puntos importantes. Solo añadiría que los switches silent red son excelentes para oficinas.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: 2,
    slug: "top-monitores-gaming-2025",
    titulo: "Top 5 Monitores Gaming 2025: Análisis y Comparativa",
    autor: "Sergio Soto",
    fecha: "15 Septiembre 2025",
    categoria: "Gaming",
    tiempoLectura: "10 min de lectura",
    imagenDestacada: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&h=400&fit=crop",
    imagenes: [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551649001-7a2482d98d09?w=800&h=400&fit=crop"
    ],
    descripcion: "El 2025 ha traído increíbles avances en tecnología de monitores gaming. Desde paneles OLED hasta tasas de refresco de 360Hz.",
    contenido: `
      <h2>La Evolución de los Monitores Gaming</h2>
      <p>El mercado de monitores gaming ha evolucionado rápidamente, ofreciendo tecnologías que antes solo soñábamos.</p>
      
      <h2>Nuestro Top 5 para 2025</h2>
      <p>Después de extensas pruebas, hemos seleccionado los 5 mejores monitores gaming del año.</p>
    `,
    caracteristicas: [
      "Tasas de refresco ultra altas",
      "Tecnología HDR avanzada",
      "Paneles OLED y QLED",
      "Sincronización adaptativa"
    ],
    etiquetas: ["monitores", "gaming", "tecnología", "reviews"],
    productosRecomendados: [1, 6],
    comentarios: []
  }
];

export const obtenerPostPorSlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

export const obtenerPostsRelacionados = (postActual, limite = 3) => {
  return blogPosts
    .filter(post => post.id !== postActual.id && post.categoria === postActual.categoria)
    .slice(0, limite);
};

export const categoriasBlog = [
  { id: 'tecnologia', nombre: 'Tecnología', cantidad: 12 },
  { id: 'gaming', nombre: 'Gaming', cantidad: 8 },
  { id: 'reviews', nombre: 'Reviews', cantidad: 15 },
  { id: 'tutoriales', nombre: 'Tutoriales', cantidad: 6 },
  { id: 'novedades', nombre: 'Novedades', cantidad: 10 }
];