// import built-in modules
import * as path from 'path';
// import third-party modules
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Go',
  description: 'About Go',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    sidebar: {
      '/': [
        {
          text: 'What is Go?',
          link: '/index',
        },
      ],
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/golang/go',
      },
    ],
  },
  markdown: {
    checkDeadLinks: true,
    highlightLanguages: ['go'],
  },
});
