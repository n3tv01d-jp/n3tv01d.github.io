import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://n3tv01d-jp.github.io',
  base: '/n3tv01d.github.io',
  devToolbar: {
    enabled: false,
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
    },
  },
});
