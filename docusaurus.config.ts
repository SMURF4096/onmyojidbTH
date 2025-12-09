import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Onmyoji DB',
  tagline: 'Comprehensive Shikigami Database',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://SMURF4096.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/onmyojidbTH/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SMURF4096', // Usually your GitHub org/user name.
  projectName: 'onmyojidbTH', // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Onmyoji DB',
      logo: {
        alt: 'Onmyoji DB Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/', label: 'Home', position: 'left' },
        { to: '/shikigami', label: 'Shikigami', position: 'left' },
        { to: '/soul', label: 'Soul', position: 'left' },
        { to: '/events', label: 'Events', position: 'left' },
        { to: '/docs', label: 'Onmyoji', position: 'left' },
        {
          href: 'https://github.com/ssig31025/onmyojidbTH',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Database',
          items: [
            {
              label: 'Shikigami',
              to: '/docs/shikigami/SSR/taira-no-masakado',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ssig31025/onmyojidbTH',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Onmyoji DB. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
