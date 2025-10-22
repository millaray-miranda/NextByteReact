export const entradasBlog = [
  {
    id: 1,
    slug: "guia-teclados-mecanicos",
    titulo: "Guía Definitiva: Cómo Elegir el Mejor Teclado Mecánico para tus Necesidades",
    autor: "Millaray Miranda",
    fecha: "2025-08-10",
    categoria: "Tecnología",
    tiempoLectura: "8 min de lectura",
    imagenDestacada: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800&h=400&fit=crop",
    resumen: "Descubre todo lo que necesitas saber para elegir el teclado mecánico perfecto según tus necesidades de gaming, trabajo o escritura.",
    contenido: `
      <div class="introduccion">
        <p>Los teclados mecánicos han revolucionado la experiencia de escritura y gaming, pero con la abrumadora cantidad de opciones disponibles, elegir el adecuado puede ser todo un desafío. En esta guía completa, te llevaré a través de todo lo que necesitas saber para tomar la mejor decisión.</p>
      </div>

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
    switches: [
      {
        tipo: "Switches Lineales (Red)",
        imagen: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=200&fit=crop",
        descripcion: "Suaves y consistentes en toda la pulsación, ideales para gaming. No tienen retroalimentación táctil ni auditiva.",
        ejemplos: "Cherry MX Red, Gateron Red"
      },
      {
        tipo: "Switches Táctiles (Brown)",
        imagen: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop",
        descripcion: "Ofrecen un bump táctil al activarse, perfectos para escritura y gaming. Silenciosos pero con feedback.",
        ejemplos: "Cherry MX Brown, Gateron Brown"
      },
      {
        tipo: "Switches Clicky (Blue)",
        imagen: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop",
        descripcion: "Proporcionan feedback táctil y auditivo con un sonido de clic satisfactorio. Ideales para escritura.",
        ejemplos: "Cherry MX Blue, Gateron Blue"
      }
    ],
    tamanos: [
      { tamaño: "100% (Full-size)", teclas: "104-108", ventajas: "Todas las teclas incluido el pad numérico", recomendado: "Oficina, contadores" },
      { tamaño: "TKL (Tenkeyless)", teclas: "87-88", ventajas: "Más espacio para el mouse, mantiene teclas de función", recomendado: "Gaming, escritores" },
      { tamaño: "75%", teclas: "84-85", ventajas: "Compacto pero con flechas y teclas de función", recomendado: "Usuarios que valoran espacio" },
      { tamaño: "60%", teclas: "61", ventajas: "Muy portátil, minimalista", recomendado: "Gamers profesionales, viajeros" }
    ],
    recomendaciones: [
      {
        nombre: "ATTACK SHARK Ajazz AK820 Pro - Mejor Valor",
        imagen: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=200&fit=crop",
        descripcion: "Este teclado ofrece una excelente relación calidad-precio con switches Gateron, iluminación RGB y construcción sólida. Perfecto para quienes se inician en el mundo de los teclados mecánicos.",
        enlace: "/producto/teclado-ajazz"
      },
      {
        nombre: "Keychron K8 - Mejor Inalámbrico",
        imagen: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop",
        descripcion: "Conectividad Bluetooth y USB-C, compatible con múltiples dispositivos y switches Hot-swappable para personalización total. Ideal para usuarios que trabajan con varios dispositivos.",
        enlace: "/producto/keychron-k8"
      }
    ],
    etiquetas: ["teclados mecánicos", "gaming", "tecnología", "periféricos"],
    articulosRelacionados: [
      {
        titulo: "Mecánico vs Membrana: ¿Cuál es la Real Diferencia?",
        imagen: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop",
        enlace: "/blog/mecanico-vs-membrana"
      },
      {
        titulo: "Guía de Mantenimiento: Cómo Limpiar tu Teclado Mecánico",
        imagen: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=200&fit=crop",
        enlace: "/blog/mantenimiento-teclado"
      },
      {
        titulo: "Personalización Extreme: El Mundo de los Keycaps Personalizados",
        imagen: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop",
        enlace: "/blog/keycaps-personalizados"
      }
    ]
  },
  {
    id: 2,
    slug: "top-monitores-gaming-2025",
    titulo: "Top 5 Monitores Gaming 2025: Análisis y Comparativa",
    autor: "Sergio Soto",
    fecha: "2025-09-15",
    categoria: "Gaming",
    tiempoLectura: "10 min de lectura",
    imagenDestacada: "https://images.unsplash.com/photo-1551649001-7a2482d98d09?w=800&h=400&fit=crop",
    resumen: "Descubre los mejores monitores gaming del 2025 con nuestro análisis exhaustivo de características, rendimiento y relación calidad-precio.",
    contenido: `
      <div class="introduccion">
        <p>El 2025 ha traído avances impresionantes en la tecnología de monitores gaming. Desde paneles OLED hasta tasas de refresco extremas, te ayudamos a encontrar el monitor perfecto para tu setup gaming.</p>
      </div>

      <h2>¿Qué Buscar en un Monitor Gaming en 2025?</h2>
      <p>Las características clave han evolucionado. Ahora debes considerar:</p>
      <ul>
        <li>Tasa de refresco mínima de 144Hz (ideal 240Hz+)</li>
        <li>Tiempo de respuesta de 1ms</li>
        <li>Tecnologías como G-Sync o FreeSync</li>
        <li>Resolución QHD o 4K</li>
        <li>Panel IPS, VA u OLED</li>
      </ul>
    `,
    // ... puedes agregar más datos específicos para monitores
    etiquetas: ["monitores", "gaming", "tecnología", "hardware"],
    articulosRelacionados: [
      {
        titulo: "Configuración Perfecta para tu Monitor Gaming",
        imagen: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=200&fit=crop",
        enlace: "/blog/configuracion-monitor-gaming"
      },
      {
        titulo: "OLED vs IPS: ¿Qué Panel Elegir?",
        imagen: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop",
        enlace: "/blog/oled-vs-ips"
      }
    ]
  },
  {
    id: 3,
    slug: "setup-trabajo-casa",
    titulo: "Setup Perfecto: Cómo Organizar tu Espacio de Trabajo en Casa",
    autor: "Diego Sepúlveda",
    fecha: "2025-09-22",
    categoria: "Tutoriales",
    tiempoLectura: "6 min de lectura",
    imagenDestacada: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=400&fit=crop",
    resumen: "Aprende a crear el espacio de trabajo perfecto en casa con consejos de ergonomía, organización y selección de equipos.",
    contenido: `
      <div class="introduccion">
        <p>El trabajo remoto llegó para quedarse, y tener un espacio de trabajo ergonómico y productivo es esencial para mantener tu salud y eficiencia.</p>
      </div>

      <h2>Elementos Clave de un Buen Setup</h2>
      <p>Un setup productivo va más allá de tener una buena computadora. Debes considerar:</p>
      <ul>
        <li>Ergonomía: silla, altura del monitor, posición del teclado</li>
        <li>Iluminación: natural y artificial adecuada</li>
        <li>Organización: cable management y espacio de trabajo</li>
        <li>Equipos: periféricos que mejoren tu productividad</li>
      </ul>
    `,
    etiquetas: ["setup", "trabajo remoto", "productividad", "ergonomía"],
    articulosRelacionados: [
      {
        titulo: "Los Mejores Periféricos para Trabajar desde Casa",
        imagen: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=200&fit=crop",
        enlace: "/blog/perifericos-trabajo-casa"
      },
      {
        titulo: "Ergonomía: Cuida tu Cuerpo Mientras Trabajas",
        imagen: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop",
        enlace: "/blog/ergonomia-trabajo"
      }
    ]
  }
];

// Función para obtener todas las entradas
export const getAllBlogPosts = () => {
  return entradasBlog;
};

// Función para obtener una entrada por slug
export const getBlogPostBySlug = (slug) => {
  return entradasBlog.find(post => post.slug === slug);
};

// Función para obtener entradas por categoría
export const getBlogPostsByCategory = (categoria) => {
  return entradasBlog.filter(post => 
    post.categoria.toLowerCase() === categoria.toLowerCase()
  );
};

// Función para obtener entradas recientes
export const getRecentBlogPosts = (limit = 3) => {
  return entradasBlog
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
    .slice(0, limit);
};