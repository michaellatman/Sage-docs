import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Sage',
  description: 'A powerful macOS/iOS AI Chat application',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Features', link: '/features' },
      { text: 'Documentation', link: 'https://sage-feature-docs-hjx8pfi3.devinapps.com' },
      { text: 'GitHub', link: 'https://github.com/michaellatman/Sage' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Sage?', link: '/' },
          { text: 'Features', link: '/features' },
          { text: 'Get Started', link: '/get-started' }
        ]
      }
    ],
    footer: {
      message: 'Released under the ISC License.',
      copyright: 'Copyright © 2023'
    }
  }
})
