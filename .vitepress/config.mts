import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vuxel",
  base: "/vuxel/",
  description: "A lightweight, component-based UI framework for Roblox",
  head: [['link', { rel: 'icon', href: '/vuxel/favicon.ico' }]],
  cleanUrls: true,
  themeConfig: {
    logo: '/Vuxel.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/docs/gs' },
      { text: 'Reference', link: '/docs/ref' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/docs/gs/introduction' },
          { text: 'Installation', link: '/docs/gs/installation' },
          { text: 'Creating an Application', link: '/docs/gs/create' },
          { text: 'Conclusion', link: '/docs/gs/conclusion' },
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'State', link: '/docs/ref/state' },
          { text: 'Components', link: '/docs/ref/components' },
          { text: 'References', link: '/docs/ref/references' },
          { text: 'Event Handling', link: '/docs/ref/events' },
          { text: 'Hooks', link: '/docs/ref/hooks' },
          { text: 'Utility Functions', link: '/docs/ref/utility' },
          { text: 'Animations', link: '/docs/ref/animations' }
        ]
      },
      {
        text: 'Exemples',
        items: [
          { text: 'A Simple Button', link: '/docs/ex/button' },
          { text: 'Counter Application', link: '/docs/ex/counter' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/OMouta/vuxel' }
    ],
  }
})
