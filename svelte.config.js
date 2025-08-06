import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';


const config = {
  extensions: ['.svelte', '.md'],

  preprocess: mdsvex({
    extensions: ['.md']
  }),

  kit: {
    adapter: adapter(),
    alias: {
			$components: './src/components/',
			$content: './src/content/',
			'@/*': './path/to/lib/*'
		}
  }
};

export default config;
