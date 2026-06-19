// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Yggdrasil Project',
  tagline: 'From zero to AI systems engineer.',
  favicon: 'img/favicon.ico',

  url: 'https://grantw4.github.io',
  baseUrl: '/yggdrasil/',

  organizationName: 'GrantW4',
  projectName: 'yggdrasil',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          path: '../curriculum',
          editUrl: 'https://github.com/GrantW4/yggdrasil/edit/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/yggdrasil-social-card.png',

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'Yggdrasil',
        logo: {
          alt: 'Yggdrasil Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'curriculumSidebar',
            position: 'left',
            label: 'Curriculum',
          },
          {
            href: '/curriculum/PLACEMENT',
            label: 'Where to Start',
            position: 'left',
          },
          {
            href: '/PROGRESS',
            label: 'Track Progress',
            position: 'left',
          },
          {
            href: 'https://github.com/GrantW4/yggdrasil',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/yggdrasil',
            label: 'Discord',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Curriculum',
            items: [
              { label: 'Phase 0: Roots', to: '/phase-0-roots/' },
              { label: 'Phase 1: Trunk', to: '/phase-1-trunk/' },
              { label: 'Phase 2: Branches', to: '/phase-2-first-branches/' },
              { label: 'Phase 3: LLMs', to: '/phase-3-llms/' },
              { label: 'Phase 4: Canopy', to: '/phase-4-canopy/' },
              { label: 'Phase 5: Realms', to: '/phase-5-realms/' },
              { label: 'Phase 6: Elite', to: '/phase-6-elite/' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Discord', href: 'https://discord.gg/yggdrasil' },
              { label: 'GitHub Discussions', href: 'https://github.com/GrantW4/yggdrasil/discussions' },
              { label: 'Contributing', to: '/CONTRIBUTING' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'GitHub', href: 'https://github.com/GrantW4/yggdrasil' },
              { label: 'Badge System', to: '/BADGES' },
              { label: 'Placement Quiz', to: '/curriculum/PLACEMENT' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Grant Werts and Yggdrasil Contributors. MIT License.`,
      },

      prism: {
        theme: require('prism-react-renderer').themes.oneDark,
        darkTheme: require('prism-react-renderer').themes.oneDark,
        additionalLanguages: ['python', 'bash', 'json', 'yaml', 'latex'],
      },

      algolia: undefined,
    }),

  plugins: [
    [
      require.resolve('@docusaurus/plugin-ideal-image'),
      { max: 1030, min: 640, quality: 80 },
    ],
  ].filter(Boolean),
};

module.exports = config;
