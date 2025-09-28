import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    // === QUIÉNES SOMOS ===
    {
      text: 'Nosotros',
      links: [
        { text: 'Inicio', href: getPermalink('/') },
        { text: 'Misión y Visión', href: getPermalink('/#mvv') },
        { text: '¿Quiénes somos?', href: getPermalink('/#nosotros') },
        { text: 'Contacto',       href: getPermalink('/#contacto') },
        { text: 'Ubicación',      href: getPermalink('/#mapa') },
      ],
    },

    // === CONSULTORÍA ===
    {
      text: 'Consultoría',
      links: [
        { text: 'Legal en Incidentes Cibernéticos', href: getPermalink('/consultoria/legal') },
        { text: 'IA para empresas, negocios y emprendedores', href: getPermalink('/consultoria/IA') },
        { text: 'Seguridad Perimetral y Control de Accesos (empresas y fraccionamientos)', href: getPermalink('/consultoria/seguridad') },
      ],
    },

    // === SERVICIOS ===
    {
      text: 'Servicios',
      links: [
        { text: 'Programa integral de ciberseguridad y prevención del acoso escolar', href: '/servicios/ciberseguridad' },
        { text: 'Automatización de procesos', href: '/#' },
        { text: 'Análisis de contexto', href: '/#' },
        { text: 'Análisis de riesgo y vulnerabilidades', href: '/#' },
      ],
    },

    // === CAPACITACIÓN Y CERTIFICACIÓN ===
    {
      text: 'Cursos',
      links: [
        {
          text: 'Instructor',
          href: getPermalink('/'),
          // Submenú con el EC específico
          links: [
            { text: 'EC 217.01', href: getPermalink('/cursos/instructor/ec-217-01') },
          ],
        },
        {
          text: 'Ciberseguridad',
          href: getPermalink('/'),
          // Submenú con los EC específicos
          links: [
            { text: 'EC 0154', href: getPermalink('/cursos/ciberseguridad/ec-0154') },
            { text: 'EC 1566', href: getPermalink('/cursos/ciberseguridad/ec-1566') },
          ],
        },
        {
          text: 'Seguridad Corporativa',
          href: getPermalink('/'),
          //submenú con los EC específicos
          links: [
            { text: 'EC 0060', href: getPermalink('/cursos/seguridad-corporativa/ec-0060') },
            { text: 'EC 0061', href: getPermalink('/cursos/seguridad-corporativa/ec-0061') },
            { text: 'EC 0213', href: getPermalink('/cursos/seguridad-corporativa/ec-0213') },
            { text: 'EC 0329', href: getPermalink('/cursos/seguridad-corporativa/ec-0329') },
          ],
        },
        { text: 'Prevención de la Violencia', href: '/#' },
        { text: 'Inteligencia Artificial', href: '/#' },
        { text: 'Automatización', href: '/#' },
      ],
    },

    // === EC ===
    //{
      //text: 'EC',
      //links: [
        //{ text: 'EC 217.01', href: '/#' },
        //{ text: 'EC 1544 y 1566', href: '/#' },
        //{ text: 'EC 0060, 0061, 0213, 0329', href: '/#' },
      //],
    //},

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
    { text: 'Contáctanos', href: '/#contacto', target: '_self' },
  ],
};
export const footerData = {
  // Logo arriba a la izquierda
  logo: {
    src: '/images/LogoTransparente.png',
    alt: 'SOOMA Consultores',
  },

  // Secciones de enlaces
  links: [
    {
      title: 'Navegación',
      links: [
        { text: 'Inicio', href: getPermalink('/') },
        { text: 'Misión y Visión', href: getPermalink('/#mvv') },
        //{ text: 'Preguntas frecuentes', href: getPermalink('/#faq') },
        //{ text: 'Demostración', href: getPermalink('/#test-drive') },
        //{ text: 'Clientes', href: getPermalink('/#clients') },
        { text: 'Nosotros', href: getPermalink('/#nosotros') },
        { text: 'Contacto', href: getPermalink('/#contacto') },
      ],
    },
    {
      title: 'Políticas de Servicio',
      links: [
        { text: 'Configuración de cookies', href: '/cookies' },
        { text: 'Términos y condiciones', href: '/terms' },
        { text: 'Preferencias de privacidad', href: '/privacy' },
      ],
    },
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
