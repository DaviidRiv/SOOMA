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
        { text: 'Programa integral de ciberseguridad y prevención del acoso escolar', href: getPermalink('/servicios/ciberseguridad') },
        { text: 'Sistema integral para la gestión de la seguridad de datos personales', href: getPermalink('/servicios/datos-personales') },
      ],
    },

    // === CAPACITACIÓN Y CERTIFICACIÓN ===
    {
      text: 'Cursos',
      links: [
        {
          text: 'Instructor 5.0',
          href: getPermalink('/Cursos/Instructor'),
          // Submenú con el EC específico
          links: [
            { text: 'EC 217.01', href: getPermalink('/Cursos/Instructor/ec-217-01') },
          ],
        },
        {
          text: 'Ciberseguridad',
          href: getPermalink('/Cursos/Ciberseguridad'),
          // Submenú con los EC específicos
          links: [
            { text: 'EC 0154', href: getPermalink('/cursos/ciberseguridad/ec-0154') },
            { text: 'EC 1566', href: getPermalink('/cursos/ciberseguridad/ec-1566') },
          ],
        },
        {
          text: 'Analista de Inteligencia',
          href: getPermalink('/Cursos/Analista'),
          //submenú con los EC específicos
          links: [
            { text: 'EC 0060', href: getPermalink('/cursos/seguridad-corporativa/ec-0060') },
            { text: 'EC 0061', href: getPermalink('/cursos/seguridad-corporativa/ec-0061') },
            { text: 'EC 0213', href: getPermalink('/cursos/seguridad-corporativa/ec-0213') },
            { text: 'EC 0329', href: getPermalink('/cursos/seguridad-corporativa/ec-0329') },
          ],
        },
        //{ text: 'Prevención de la Violencia', href: '/Cursos/PrevenciónViolencia' },
        //{ text: 'Inteligencia Artificial', href: '/Cursos/InteligenciaArtificial' },
        //{ text: 'Automatización', href: '/Cursos/Automatización' },
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
        { text: 'Conferencia de concientización sobre el phishing', href: getPermalink ('/Cortesias/phishing') },
        { text: 'Conferencia sobre los riesgos en redes sociales', href: getPermalink ('/Cortesias/redes-sociales') },
        { text: 'Conferencia sobre la prevención de la violencia y acoso escolar', href: getPermalink('/Cortesias/violencia-acoso') },
        { text: 'Conferencia sobre Seguridad Digital', href: getPermalink ('/Cortesias/seguridad-digital') },
        { text: 'Conferencia Fundamentos de la Inteligencia Artificial', href: getPermalink ('/Cortesias/inteligencia-artificial') },
        { text: 'Análisis de contexto para empresas y fraccionamientos residenciales', href: getPermalink ('/Cortesias/analisis-contexto') },
      ],
    },
  ],

  // Botón derecho
  actions: [
    { text: 'Contáctanos', href: '/#contacto', target: '_self' },
  ],
};
export const footerData = {
  // Logo arriba a la izquierda
  logo: {
    src: '/images/logo-sooma-azul.png',        // claro
    darkSrc: '/images/LogoTransparente4.png',  // oscuro
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
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=ventas@soomaconsultores.com.mx', target: '_blank',
    },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/525549262639', target: '_blank' },
    {
      ariaLabel: 'Mapa',
      icon: 'tabler:map-pin',
      href: 'https://www.google.com/maps/search/?api=1&query=Ca%C3%B1ada%20Real%20316%2C%20C.P.%2078215%2C%20Lomas%20del%20Tecnol%C3%B3gico%2C%20San%20Luis%20Potos%C3%AD%20S.L.P',
      target: '_blank'
    },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61581034220553', target: '_blank' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/', target: '_blank' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/', target: '_blank' },
  ],

    footNote: `
      © ${new Date().getFullYear()} SOOMA Consultores. Todos los derechos reservados.
    `,
};
