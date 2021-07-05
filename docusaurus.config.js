module.exports = {
  title: 'DM-SV01',
  tagline: 'OCP Server Support Site',
  organizationName: 'pbco2003',
  projectName: 'dm-sv01-docs',
  baseUrl: '/',
  url: 'https://www.datacom.wien',
  favicon: 'img/favicon.ico',
  themeConfig: {
    hideOnScroll: true,
    algolia: {
        apiKey: '9bfad31d9c97b28d4e5f0bfe57dbffaf',
        indexName: 'axioms_developer'
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Datacom Logo',
        src: 'img/datacom.svg',
      },
      items: [
        {
          to: 'docs/overview',
          label: 'DOCS',
          position: 'left',
        },
        { to: 'blog', label: 'FAQ', position: 'left' },
        {
            href: 'https://www.datacom.wien/',
            label: 'SITE',
            position: 'left',
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
              label: 'Users Manual',
              to: 'docs/overview',
            },
          ],
        },
        {
          title: 'Site',
          items: [
            {
              label: 'Datacom Site',
              href: 'https://www.datacom.wien',
            },
          ],
        },
       {
          title: 'Terms',
          items: [
            {
              label: 'Help',
              href: 'https://www.datacom.wien/support',
            },
          ],
       },
       {
        title: 'Contact',
        items: [
          {
            label: 'Email',
            href: 'mailto:suporte@datacom.com.br',
          },
        ],
     },
    ],
//      logo: {
//       alt: 'Datacom Electronics',
//        src: 'img/datacom.svg',
//        href: 'https://www.datacom.wien',
//      },
      copyright: `Copyright © ${new Date().getFullYear()} Datacom Electronics GmbH`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
      },          
    },
    ],
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Sen|Source+Code+Pro',
    'https://at-ui.github.io/feather-font/css/iconfont.css'
  ],
};
