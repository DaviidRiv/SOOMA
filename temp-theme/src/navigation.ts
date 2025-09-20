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
  // sin cambios
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo">Arthelokyo</a> · All rights reserved.
  `,
};
