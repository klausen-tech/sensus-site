// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Sensus",
  tagline:
    "Homeassistant compatible, Wireless Plant 🪴 and Environment ⛅ Sensor with 1 year battery life",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://sensus.klausen.tech",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'klausen-tech', // Usually your GitHub org/user name.
  projectName: 'sensus-site', // Usually your repo name.
  deploymentBranch: 'deployment', // The site will be deployed on this branch.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/klausen-tech/sensus-site/tree/source/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Sensus",
        logo: {
          alt: "Sensus Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/klausen-tech/sensus-site",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/klausen-tech/sensus-site",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "Email",
                href: "mailto:contact@klausen.tech",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Klausen Tech`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  scripts: [
    {
      src: "https://umami.calin.cloud/script.js",
      async: true,
      "data-website-id": "a006ea19-7208-4ce9-876f-3111d2f06a18",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/zoom-vanilla.js/dist/zoom-vanilla.min.js",
      defer: true
    }
  ],
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;700&display=swap",
    "https://cdn.jsdelivr.net/npm/zoom-vanilla.js/dist/zoom.css"
  ],  
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 320, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
};

module.exports = config;
