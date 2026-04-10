import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://example.com',
  adapter: cloudflare(),
  integrations: [
    tailwind(),
  ],
});
