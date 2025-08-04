import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import path from 'path';

const config = {
  extensions: ['.svelte', '.md'],

  preprocess: [mdsvex({
    extensions: ['.md']
  })],

  kit: {
    alias: {
      $content: path.resolve('src/content'),
    },
	
  }
};

export default config;
