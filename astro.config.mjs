import { defineConfig } from 'astro/config';

// Local preview uses "/". GitHub project pages will need a base path later.
export default defineConfig({
  site: 'https://n3tv01d-jp.github.io',
  devToolbar: {
    enabled: false,
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
    },
  },
});
