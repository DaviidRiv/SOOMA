import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    // === INICIO (antes: Homes) ===
    {
      text: 'Inicio',
      links: [
        { text: 'Misión y Visión', href: getPermalink('/homes/saas') },         // antes: SaaS
        { text: '¿Quiénes somos?', href: getPermalink('/homes/startup') },      // antes: Startup
        { text: 'Contacto', href: getPermalink('/homes/mobile-app') },          // antes: Mobile App
        { text: 'Ubicación', href: getPermalink('/homes/personal') },           // antes: Personal
      ],
    },

    // === SEGURIDAD (antes: Pages) ===
    {
      text: 'Seguridad',
      links: [
        { text: 'Escolar', href: getPermalink('/#features') },                  // antes: Features (Anchor Link)
        { text: 'Intramuros', href: getPermalink('/services') },                // antes: Services
        { text: 'Laboral', href: getPermalink('/pricing') },                    // antes: Pricing
        { text: 'Ciberseguridad', href: getPermalink('/about') },               // antes: About us
        { text: 'De datos personales', href: getPermalink('/contact') },        // antes: Contact
        { text: 'Gestión de permisos', href: getPermalink('/terms') },          // antes: Terms
        { text: 'Vulnerabilidad', href: getPermalink('/privacy') },             // antes: Privacy policy
      ],
    },

    // === CAPACITACIÓN (antes: Landing) ===
    {
      text: 'Capacitación',
      links: [
        { text: 'Técnica', href: getPermalink('/landing/lead-generation') },    // antes: Lead Generation
        { text: 'Profesional', href: getPermalink('/landing/sales') },          // antes: Long-form Sales
        { text: 'General', href: getPermalink('/landing/click-through') },      // antes: Click-Through
        { text: 'Específica', href: getPermalink('/landing/product') },         // antes: Product Details
        { text: 'Desarrollo Humano', href: getPermalink('/landing/pre-launch') },// antes: Coming Soon or Pre-Launch
        { text: 'Alta dirección', href: getPermalink('/landing/subscription') }, // antes: Subscription
      ],
    },

    // === METODOLOGÍA (antes: Blog) ===
    {
      text: 'Metodología',
      links: [
        { text: 'Diagnóstico', href: getBlogPermalink() },                      // antes: Blog List
        { text: 'Planificación', href: getPermalink('get-started-website-with-astro-tailwind-css', 'post') }, // antes: Article
        { text: 'Implementación', href: getPermalink('markdown-elements-demo-post', 'post') },                // antes: Article (with MDX)
        { text: 'Evaluación', href: getPermalink('tutorials', 'category') },    // antes: Category Page
        { text: 'Recursos', href: getPermalink('astro', 'tag') },               // antes: Tag Page (nombre genérico)
      ],
    },

    // === CORTESÍAS (antes: Widgets) ===
    {
      text: 'Cortesías',
      href: '#', // se mantiene igual
    },
  ],

  // Botón derecho: lo dejo como estaba para que siga enviando al mismo lugar
  actions: [{ text: 'Download', href: 'https://github.com/arthelokyo/astrowind', target: '_blank' }],
};

export const footerData = {
  // sin cambios (conserva los mismos href)
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
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo"> Arthelokyo</a> · All rights reserved.
  `,
};
