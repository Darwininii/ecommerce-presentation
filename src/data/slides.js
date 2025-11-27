/**
 * Slides Data Module
 * 
 * Contains all presentation slide content extracted and structured from ecommerce.txt.
 * This file serves as the single source of truth for presentation content.
 * 
 * @module slides
 * 
 * Data Structure:
 * Each slide object contains:
 * - id {number}: Unique identifier (sequential)
 * - title {string}: Main heading (required)
 * - subtitle {string}: Secondary heading (optional)
 * - content {string}: Main descriptive text (required)
 * - bulletPoints {string[]}: List of key points (optional)
 * - type {string}: Slide category - "intro", "content", or "outro"
 * 
 * Usage:
 * ```javascript
 * import { slides } from './data/slides';
 * 
 * // Get total slides
 * const total = slides.length; // 22
 * 
 * // Get specific slide
 * const firstSlide = slides[0];
 * 
 * // Map over slides
 * slides.map(slide => console.log(slide.title));
 * ```
 * 
 * Content Source:
 * All content is based on ecommerce.txt, covering the complete history
 * of e-commerce from the 1920s catalog sales to modern trends like
 * live shopping and sustainability.
 * 
 * Customization:
 * To add a new slide, follow this structure:
 * ```javascript
 * {
 *   id: 23,
 *   title: "Your Title",
 *   subtitle: "Optional Subtitle",
 *   content: "Main content description",
 *   bulletPoints: ["Point 1", "Point 2", "Point 3"],
 *   type: "content"
 * }
 * ```
 * 
 * Best Practices:
 * - Keep titles concise (max 60 characters)
 * - Limit content to 2-3 sentences
 * - Use 3-5 bullet points maximum
 * - Maintain consistent structure across slides
 * - Use sequential IDs
 * 
 * @author Your Name
 * @version 1.0.0
 */

export const slides = [
    {
        id: 1,
        title: "Historia del Comercio Electrónico",
        subtitle: "Evolución y Futuro",
        content: "Conoce la historia del comercio electrónico, cómo ha evolucionado desde sus inicios hasta hoy, y qué nos depara el futuro.",
        image: "/ecommerce-pptx.png",
        type: "intro"
    },
    {
        id: 2,
        title: "Los Orígenes: Venta por Catálogo",
        subtitle: "Años 20 y 30 - Estados Unidos",
        content: "El primer paso hacia el ecommerce fueron las ventas por catálogo. Este modelo rompió con todo lo establecido, permitiendo a los consumidores ordenar productos sin salir de casa.",
        bulletPoints: [
            "Comodidad para el consumidor",
            "Evitar ir a tiendas físicas",
            "Precursor de la compra a distancia",
            "Cambió el modelo de negocio tradicional"
        ],
        type: "content"
    },
    {
        id: 3,
        title: "La Era del Teléfono",
        subtitle: "Expansión Telefónica",
        content: "La venta por catálogo evolucionó gracias a la expansión del teléfono. Lo que se usaba para comunicarse con familiares se convirtió en la herramienta maestra de los vendedores.",
        bulletPoints: [
            "Pedidos telefónicos masivos",
            "Cambió el modelo de negocio",
            "Mercado real y abundante",
            "Métodos no tradicionales de venta"
        ],
        type: "content"
    },
    {
        id: 4,
        title: "Primera Tarjeta de Crédito",
        subtitle: "Western Union - 1914",
        content: "Western Union lanzó la primera tarjeta de crédito en 1914. Pero no fue hasta los años 50, con la popularidad de las compras telefónicas, que el público entendió su valor.",
        bulletPoints: [
            "No necesitabas estar presente físicamente",
            "No necesitabas dinero físico",
            "Facilitó las compras a distancia",
            "Revolucionó los métodos de pago"
        ],
        type: "content"
    },
    {
        id: 5,
        title: "El Inicio Real del Ecommerce",
        subtitle: "EDI - 1960",
        content: "En 1960 se inventa el Electronic Data Interchange (EDI), una plataforma que facilitaba a las empresas transmitir datos financieros de manera electrónica, como órdenes de compra y facturas.",
        bulletPoints: [
            "Transmisión electrónica de datos",
            "Órdenes de compra digitales",
            "Facturas electrónicas",
            "Fundamental para las televentas"
        ],
        type: "content"
    },
    {
        id: 6,
        title: "Modernización Electrónica",
        subtitle: "Michael Aldrich - Finales de los 70",
        content: "Michael Aldrich creó un concepto revolucionario: conectar una televisión doméstica vía teléfono a una línea multiusuario de procesamiento computarizado.",
        bulletPoints: [
            "Primeras transacciones electrónicas informáticas",
            "Aplicado en Irlanda, España y Reino Unido",
            "Transferencias financieras B2B",
            "Compra/venta de paquetes turísticos y autos"
        ],
        type: "content"
    },
    {
        id: 7,
        title: "Primera Compra Online B2C",
        subtitle: "Jane Snowball - 1984",
        content: "Jane Snowball, una mujer de 72 años, realizó la primera compra en línea B2C registrada. Utilizó un sistema de teleshopping basado en tecnología Videotex.",
        bulletPoints: [
            "TV modificada con chips especiales",
            "Directorio de minoristas en pantalla",
            "Lista de ~1000 artículos de Tesco",
            "Pago en efectivo al recibir"
        ],
        type: "content"
    },
    {
        id: 8,
        title: "El Internet lo Cambió Todo",
        subtitle: "World Wide Web - 1991",
        content: "El proyecto de hipertexto de Tim Berners-Lee y Robert Cailliau, junto con el levantamiento de restricciones del Internet en 1991, permitieron el salto real del ecommerce.",
        bulletPoints: [
            "World Wide Web (1989-1991)",
            "Uso comercial permitido",
            "Cambió la forma de comprar y vender",
            "Consolidación del modelo de negocio"
        ],
        type: "content"
    },
    {
        id: 9,
        title: "Primera Transacción Segura",
        subtitle: "Dan Kohn - 1994",
        content: "En 1994, Dan Kohn vendió el disco 'Ten Summoner's Tales' de Sting a través de NetMarket. El comprador pagó usando un sistema de cifrado para proteger los datos de su tarjeta.",
        bulletPoints: [
            "Primer eCommerce con todos los elementos",
            "Producto + pago electrónico + seguridad",
            "Sistema de cifrado SSL",
            "Marcó un hito en la confianza"
        ],
        type: "content"
    },
    {
        id: 10,
        title: "Nacen los Gigantes",
        subtitle: "Amazon y eBay - 1995",
        content: "En 1995 se fundaron dos gigantes que transformaron el ecommerce en una opción de venta masiva: eBay (Pierre Omidyar) y Amazon (Jeff Bezos).",
        bulletPoints: [
            "eBay: Auction Web, modelo de subastas",
            "Amazon: De librería a 'la tienda de todo'",
            "Primeros sistemas de pago con tarjetas",
            "Líderes indiscutibles hasta hoy"
        ],
        type: "content"
    },
    {
        id: 11,
        title: "La Burbuja de las Puntocom",
        subtitle: "1997 - 2000",
        content: "Período de gran efervescencia tecnológica. Muchas startups surgieron, pero la especulación excesiva llevó a la caída de muchas empresas que no lograron sostener su modelo.",
        bulletPoints: [
            "Inversión masiva en tecnología",
            "Especulación excesiva",
            "eBay y Amazon sobrevivieron",
            "Se convirtieron en líderes globales"
        ],
        type: "content"
    },
    {
        id: 12,
        title: "PayPal Revoluciona los Pagos",
        subtitle: "1998 - 2002",
        content: "Fundado como Confinity en 1998, PayPal revolucionó los pagos online. Fue adquirido por eBay en 2002 por $1,500 millones, convirtiéndose en el método de pago preferido.",
        bulletPoints: [
            "Facilidad de uso y seguridad",
            "Integración con eBay",
            "Confianza en transacciones online",
            "Separación de eBay en 2015"
        ],
        type: "content"
    },
    {
        id: 13,
        title: "Era Móvil: El iPhone",
        subtitle: "2007 - Punto de Inflexión",
        content: "El lanzamiento del iPhone en 2007 transformó el eCommerce. Los usuarios podían acceder a internet desde la palma de su mano, impulsando el mCommerce.",
        bulletPoints: [
            "Acceso a internet móvil masivo",
            "Páginas web responsivas",
            "Apps móviles optimizadas",
            "Geolocalización y ofertas personalizadas"
        ],
        type: "content"
    },
    {
        id: 14,
        title: "Latinoamérica en el Ecommerce",
        subtitle: "Mercado Libre - Finales del siglo XX",
        content: "La explosión de oportunidades en Latinoamérica se dio con portales como Mercado Libre, empresa unicornio nacida en Argentina. El Internet en casa llegó tarde, pero el potencial es enorme.",
        bulletPoints: [
            "Segunda región con mayor crecimiento",
            "Brasil y México: mercados principales",
            "Superación de la desconfianza inicial",
            "87% de usuarios confían en compras online"
        ],
        type: "content"
    },
    {
        id: 15,
        title: "Social Commerce",
        subtitle: "2010 - 2020",
        content: "Las redes sociales dejaron de ser solo espacios de interacción y se convirtieron en canales de venta directos. Instagram Shopping y Facebook Marketplace cambiaron el juego.",
        bulletPoints: [
            "Instagram Shopping: productos etiquetados",
            "Facebook Marketplace",
            "Influencer Marketing consolidado",
            "Fusión de compra e interacción social"
        ],
        type: "content"
    },
    {
        id: 16,
        title: "Tecnologías Emergentes",
        subtitle: "IA, Big Data y Realidad Aumentada",
        content: "La IA ofrece recomendaciones personalizadas y chatbots 24/7. El Big Data optimiza el customer journey. La RA permite visualizar productos antes de comprar.",
        bulletPoints: [
            "IA: Recomendaciones personalizadas",
            "Big Data: Análisis de comportamiento",
            "RA: Visualización de productos (IKEA, Nike)",
            "Mejora de satisfacción y fidelidad"
        ],
        type: "content"
    },
    {
        id: 17,
        title: "Impacto de la Pandemia",
        subtitle: "COVID-19 - 2020",
        content: "La pandemia aceleró masivamente la adopción del eCommerce. Millones recurrieron a compras online debido a restricciones. El comercio digital creció exponencialmente.",
        bulletPoints: [
            "Crecimiento masivo en alimentación",
            "Entretenimiento online",
            "Expansión en mercados emergentes",
            "19% de ventas minoristas globales en 2020"
        ],
        type: "content"
    },
    {
        id: 18,
        title: "Tendencias Actuales",
        subtitle: "2020 - Presente",
        content: "El futuro del eCommerce está marcado por experiencias personalizadas, entregas rápidas, suscripciones y pagos a plazos. El móvil domina las compras.",
        bulletPoints: [
            "73% usará móvil en 2025 (Latinoamérica)",
            "Entregas el mismo día",
            "Click and collect",
            "Modelos de suscripción"
        ],
        type: "content"
    },
    {
        id: 19,
        title: "El Futuro: Comercio Conversacional",
        subtitle: "Chatbots y Asistentes IA",
        content: "El comercio conversacional permite compras fluidas a través de WhatsApp, Facebook Messenger y asistentes virtuales. Especialmente popular en China.",
        bulletPoints: [
            "Chatbots impulsados por IA",
            "Compras por mensajería",
            "Respuestas 24/7",
            "Experiencia personalizada"
        ],
        type: "content"
    },
    {
        id: 20,
        title: "Live Shopping",
        subtitle: "Entretenimiento + Compras en Tiempo Real",
        content: "El live shopping combina entretenimiento con compras instantáneas. Influencers muestran productos en directo mientras los usuarios compran. Tendencia en expansión a Occidente.",
        bulletPoints: [
            "Popular en Asia",
            "Marcas como Zara lo adoptan",
            "Compras instantáneas",
            "Mezcla de experiencia tradicional e inmediatez"
        ],
        type: "content"
    },
    {
        id: 21,
        title: "Sostenibilidad",
        subtitle: "El Reto del Futuro",
        content: "Los consumidores exigen prácticas sostenibles. El eCommerce debe reducir su huella de carbono en producción y entregas. La logística verde es crucial.",
        bulletPoints: [
            "Productos reciclables",
            "Cadena de suministro transparente",
            "Embalajes ecológicos",
            "Logística verde (Patagonia lidera)"
        ],
        type: "content"
    },
    {
        id: 22,
        title: "Conclusión",
        subtitle: "Una Evolución Constante",
        content: "La historia del comercio electrónico (E-Commerce) está llena de innovaciones que facilitan la vida a los usuarios. Desde catálogos hasta IA y realidad aumentada, el objetivo siempre ha sido la comodidad del consumidor.",
        bulletPoints: [
            "Innovación constante",
            "Atención a necesidades del mercado",
            "Desarrollo de productos secundario",
            "El futuro: IA y realidad aumentada"
        ],
        type: "outro"
    }
];
