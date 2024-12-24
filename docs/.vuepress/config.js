module.exports = {
  title: 'Sage Documentation',
  description: 'User guide for the Sage AI Chat application',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
    ],
    sidebar: [
      '/',
      '/getting-started',
      '/usage',
      '/tools',
      '/faq'
    ],
    sidebarDepth: 2,
    displayAllHeaders: true,
    lastUpdated: 'Last Updated',
    repo: 'michaellatman/Sage-docs',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Help improve this page!'
  }
}
