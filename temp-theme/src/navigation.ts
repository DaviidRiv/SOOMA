import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    // === INICIO (queda igual) ===
    {
      text: 'Inicio',
      links: [
        { text: 'Misión y Visión', href: getPermalink('/homes/saas') },
        { text: '¿Quiénes somos?', href: getPermalink('/homes/startup') },
        { text: 'Contacto',       href: getPermalink('/homes/mobile-app') },
        { text: 'Ubicación',      href: getPermalink('/homes/personal') },
      ],
    },

    // === SEGURIDAD (nuevo menú principal) ===
    {
      text: 'Seguridad',
      links: [
        { text: 'Escolar',             href: getPermalink('/#features') },
        { text: 'Intramuros',          href: getPermalink('/services') },
        { text: 'Laboral',             href: getPermalink('/pricing') },
        { text: 'Ciberseguridad',      href: getPermalink('/about') },
        { text: 'De datos personales', href: getPermalink('/contact') },
        { text: 'Gestión de permisos', href: getPermalink('/terms') },
        { text: 'Vulnerabilidad',      href: getPermalink('/privacy') },
      ],
    },

    // === CAPACITACIÓN (nuevo) ===
    {
      text: 'Capacitación',
      links: [
        { text: 'Técnica',            href: getPermalink('/landing/lead-generation') },
        { text: 'Profesional',        href: getPermalink('/landing/sales') },
        { text: 'General',            href: getPermalink('/landing/click-through') },
        { text: 'Específica',         href: getPermalink('/landing/product') },
        { text: 'Desarrollo Humano',  href: getPermalink('/landing/pre-launch') },
        { text: 'Alta dirección',     href: getPermalink('/landing/subscription') },
        { text: 'Inducción al puesto',        href: getPermalink('astro','tag') },
      ],
    },

    // === METODOLOGÍA (nuevo) ===
    {
      text: 'Metodología',
      links: [
        { text: 'Diagnóstico',     href: getBlogPermalink() },
        { text: 'Planificación',   href: getPermalink('get-started-website-with-astro-tailwind-css','post') },
        { text: 'Implementación',  href: getPermalink('markdown-elements-demo-post','post') },
        { text: 'Evaluación',      href: getPermalink('tutorials','category') },
      ],
    },

    // === CORTESÍAS (nuevo) ===
    {
      text: 'Cortesías',
      links: [
        { text: 'Diagnóstico ejecutivo',        href: getPermalink('/courtesias/diagnostico-ejecutivo') },
        { text: 'Conferencia "Ciberseguridad"', href: getPermalink('/courtesias/conferencia-ciberseguridad') },
        { text: 'Conferencia "Violencia"',      href: getPermalink('/courtesias/conferencia-violencia') },
        { text: 'Conferencia "Liderazgo"',      href: getPermalink('/courtesias/conferencia-liderazgo') },
      ],
    },
  ],

  // Botón derecho actualizado
  actions: [
    { text: 'Contáctanos', href: '/#contacto', target: '_self' },
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
