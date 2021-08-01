const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Animeback WIKI',
  tagline: 'Anime your wallpapers',
  url: 'https://wiki.animeback.tai-studio.ml/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TaiStudio', // Usually your GitHub org/user name.
  projectName: 'Animeback', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
  themeConfig: {
    navbar: {
      title: 'Animeback WIKI',
      logo: {
        alt: 'Animeback WIKI Logo',
        src: 'img/animeback.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {href: 'https://animeback.tai-studio.ml/', label: 'Download', position: 'left'},
        {
          href: 'https://github.com/LeGitHubDeTai/AnimeBack',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Submit Extension',
              href: 'https://github.com/TaiStudio/animeback-submit',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/zctFdAPUzP',
            },
            {
              label: 'Download',
              href: 'https://animeback.tai-studio.ml/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Tai Studio',
              href: 'https://tai-studio.ml/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/LeGitHubDeTai/AnimeBack',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Animeback, Tai Studio.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/TaiStudio/Animeback-WIKI/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
