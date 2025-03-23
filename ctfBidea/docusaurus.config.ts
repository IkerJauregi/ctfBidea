import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'ctfBidea',
  tagline: 'Writeups y técnicas de ciberseguridad ofensiva',
  favicon: 'img/favicon.ico',

  url: 'https://ctfbidea.dev',
  baseUrl: '/',

  organizationName: 'IkerJauregi',
  projectName: 'ctfBidea',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/IkerJauregi/ctfBidea/edit/main/',
        },
        blog: false, // Blog desactivado completamente
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'ctfBidea',
      logo: {
        alt: 'Logo de ctfBidea',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentación',
        },
        {
          href: 'https://github.com/IkerJauregi/ctfBidea',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contenido',
          items: [
            {
              label: 'Documentación',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Comunidad',
          items: [
            {
              label: 'Discord (recomendado)',
              href: 'https://discord.gg/infosec', // Cambia esto si tienes uno propio
            },
            {
              label: 'Hack The Box',
              href: 'https://www.hackthebox.com/',
            },
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/IkerJauregi/ctfBidea',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} ctfBidea. Construido con Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
