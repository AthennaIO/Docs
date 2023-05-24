// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Athenna Framework',
  tagline: 'The plug & play Node.js framework',
  favicon: 'img/favicons/favicon.ico',
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

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./src/sidebars.js'),
          editUrl: 'https://github.com/AthennaIO/Docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./static/css/root.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/pre-visualization/og.jpg',
      navbar: {
        title: 'Athenna Framework',
        logo: {
          alt: 'Athenna Logo',
          src: 'img/logos/logo.png',
        },
        items: [
          {
            href: 'https://github.com/AthennaIO',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guides',
                to: '/docs/getting-started/installation',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/mZyBkA936X',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/athennaio',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/athennaio',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Athenna Framework, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: require('./lib/prism'),
      },
    }),
};

module.exports = config;
