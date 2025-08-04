import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import path from 'path';
import { fileURLToPath } from 'url';

const config = {
  extensions: ['.svelte', '.md'],

  preprocess: mdsvex({
    extensions: ['.md']
  }),

  kit: {
    adapter: adapter(),
    alias: {
      $Content: path.resolve('/src/Content'),
    }
  }
};

export default config;
