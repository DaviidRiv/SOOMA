import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    // === QUIÉNES SOMOS ===
    {
      text: 'Quiénes somos',
      links: [
        { text: 'Misión y Visión', href: getPermalink('#mvv') },
        { text: '¿Quiénes somos?', href: getPermalink('#nosotros') },
        { text: 'Contacto',       href: getPermalink('#contacto') },
        { text: 'Ubicación',      href: getPermalink('#mapa') },
      ],
    },

    // === CONSULTORÍA ===
    {
      text: 'Consultoría',
      links: [
        { text: 'Legal en Incidentes Cibernéticos', href: getPermalink('/consultoria/legal') },
        { text: 'Ciberseguridad para empresas y usuarios finales', href: '/#' },
        { text: 'IA para empresas, negocios y emprendedores', href: '/#' },
        { text: 'Seguridad Perimetral y Control de Accesos (empresas y fraccionamientos)', href: '/#' },
      ],
    },

    // === SERVICIOS ===
    {
      text: 'Servicios',
      links: [
        { text: 'Programa Integral de Ciberseguridad y Prevención del Acoso escolar', href: '/#' },
        { text: 'Análisis del nivel de maduración en Ciberseguridad', href: '/#' },
        { text: 'Pruebas de penetración', href: '/#' },
        { text: 'Automatización de procesos con Power Automate (Microsoft)', href: '/#' },
        { text: 'Análisis de Contexto', href: '/#' },
        { text: 'Análisis de riesgo y vulnerabilidades', href: '/#' },
      ],
    },

    // === CAPACITACIÓN Y CERTIFICACIÓN ===
    {
      text: 'Acreditaciones',
      links: [
        { text: 'Instructor', href: '/#' },
        { text: 'Ciberseguridad', href: '/#' },
        { text: 'Seguridad Corporativa', href: '/#' },
        { text: 'Prevención de la Violencia', href: '/#' },
        { text: 'Inteligencia Artificial', href: '/#' },
        { text: 'Automatización', href: '/#' },
      ],
    },

    // === EC ===
    {
      text: 'EC',
      links: [
        { text: 'EC 217.01', href: '/#' },
        { text: 'EC 1544 y 1566', href: '/#' },
        { text: 'EC 0060, 0061, 0213, 0329', href: '/#' },
      ],
    },

    // === CORTESÍAS ===
    {
      text: 'Cortesías',
      links: [
        { text: 'Conferencia de concientización sobre el phishing', href: '/#' },
        { text: 'Conferencia sobre los riesgos en redes sociales', href: '/#' },
        { text: 'Conferencia sobre la prevención de la violencia y acoso escolar', href: '/#' },
        { text: 'Conferencia sobre Seguridad Digital', href: '/#' },
        { text: 'Conferencia Fundamentos de la Inteligencia Artificial', href: '/#' },
        { text: 'Análisis de contexto para empresas y fraccionamientos residenciales', href: '/#' },
      ],
    },
  ],

  // Botón derecho (sin cambios)
  actions: [
    { text: 'Contáctanos', href: '#contacto', target: '_self' },
  ],
};
export const footerData = {
  // Logo arriba a la izquierda
  logo: {
    src: '/images/logo-sooma.jpg',
    alt: 'SOOMA Consultores',
  },

  // Secciones de enlaces
  links: [
    {
      title: 'Navegación',
      links: [
        { text: 'Inicio', href: '/' },
        { text: 'Marcas', href: '/#brands' },
        { text: 'Servicios', href: '/#services' },
        { text: 'Preguntas frecuentes', href: '/#faq' },
        { text: 'Demostración', href: '/#test-drive' },
        { text: 'Clientes', href: '/#clients' },
        { text: 'Nosotros', href: '#nosotros' },
        { text: 'Contacto', href: '/#contacto' },
      ],
    },
    {
      title: 'Política de Cookies',
      links: [
        { text: 'Configuración de cookies', href: '/cookies/configuracion' },
        { text: 'Más información sobre cookies', href: '/cookies/info' },
        { text: 'Preferencias de privacidad', href: '/cookies/preferencias' },
      ],
    },
  ],

  secondaryLinks: [
    { text: 'Términos', href: '/terms' },
    { text: 'Privacidad', href: '/privacy' },
  ],

  // Iconos inferiores
socialLinks: [
  {
    ariaLabel: 'Email',
    icon: 'tabler:mail',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=emmaidaliasaldana@gmail.com',
  },
  { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/524441425726' },
  {
    ariaLabel: 'Mapa',
    icon: 'tabler:map-pin',
    href: 'https://www.google.com/maps/search/?api=1&query=Ca%C3%B1ada%20Real%20316%2C%20C.P.%2078215%2C%20Lomas%20del%20Tecnol%C3%B3gico%2C%20San%20Luis%20Potos%C3%AD%20S.L.P',
  },
  { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/' },
  { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/' },
  { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/' },
],

  footNote: `
    © ${new Date().getFullYear()} SOOMA Consultores. Todos los derechos reservados.
  `,
};
