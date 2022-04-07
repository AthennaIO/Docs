// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Athenna',
  tagline: 'The plug and play Node.js framework',
  url: 'https://athenna.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'AthennaIO',
  deploymentBranch: 'main',
  projectName: 'Docs',
  staticDirectories: ['public', 'static'],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarCollapsed: true,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/AthennaIO/Docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      {
        navbar: {
          title: 'Athenna',
          logo: {
            alt: 'Athenna Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'getting-started/installation',
              position: 'left',
              label: 'Guides',
            },
            {
              href: 'https://github.com/athennaio',
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
          copyright: `Copyright © ${new Date().getFullYear()} Athenna, Inc. Built with Docusaurus.`,
        },
      },
};

module.exports = config;
