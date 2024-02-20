// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Athenna Framework',
  tagline: 'One foundation for multiple applications',
  favicon: 'img/favicons/minerva.ico',
  url: 'https://athenna.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  organizationName: 'AthennaIO',
  projectName: 'Docs',
  deploymentBranch: 'main',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
          sidebarPath: require.resolve('./src/sidebars.js'),
          editUrl: 'https://github.com/AthennaIO/Docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./static/css/root.css'),
        },
        gtag: {
          trackingID: 'G-TPPC0L9LCF',
          anonymizeIP: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/pre-visualization/home.png',
      metadata: [
        { 
          name: 'og:description', 
          content: 'One foundation for multiple applications' 
        },
        {
          tagName: 'meta',
          name: 'theme-color',
          content: '#9580ff'
        } 
      ],
      navbar: {
        title: 'Athenna',
        logo: {
          alt: 'Athenna Framework',
          src: 'img/logos/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started/installation',
            label: 'Docs',
            position: 'right',
          },
          {
            to: 'benchmarks',
            label: 'Benchmarks',
            position: 'right',
          },
          {
            href: 'https://github.com/AthennaIO',
            'aria-label': 'GitHub',
            className: 'navbar__icon navbar__github',
            position: 'right',
            html: '<i class="fa-brands fa-github"></i>',
          },
          {
            href: 'https://discord.gg/mZyBkA936X',
            'aria-label': 'Discord',
            className: 'navbar__icon navbar__discord',
            position: 'right',
            html: '<i class="fa-brands fa-discord"></i>',
          },
          {
            href: 'https://twitter.com/athennaio',
            'aria-label': 'Twitter',
            className: 'navbar__icon navbar__twitter',
            position: 'right',
            html: '<i class="fa-brands fa-x-twitter"></i>',
          },
        ],
      },
      prism: {
        additionalLanguages: ["json", "bash", "typescript", "sql"],
        theme: require('./lib/prism/dracula'),
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'img/logos/minerva.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: 'manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#ffffff',
            media: '(prefers-color-scheme: light)',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#242526',
            media: '(prefers-color-scheme: dark)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'img/logos/minerva.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'img/logos/minerva.png',
            color: 'rgb(80,27,134)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ]
};

module.exports = config;
