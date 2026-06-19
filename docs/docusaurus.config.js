const config = {
  title: 'The Yggdrasil Project',
  tagline: 'From zero to AI systems engineer.',
  favicon: 'img/logo.svg',

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
      {
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
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Yggdrasil',
      logo: {
        alt: 'Yggdrasil — From zero to AI systems engineer',
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
          to: '/PLACEMENT',
          label: 'Where to Start',
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
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/GrantW4/yggdrasil/discussions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/GrantW4/yggdrasil' },
            { label: 'Badge System', to: '/BADGES' },
            { label: 'Contributing', to: '/CONTRIBUTING' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Grant Werts and Yggdrasil Contributors. MIT License.`,
    },

    prism: {
      additionalLanguages: ['python', 'bash', 'json', 'yaml'],
    },
  },
};

module.exports = config;
