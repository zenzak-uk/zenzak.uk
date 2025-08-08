import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Use the static adapter to build a static site
		adapter: adapter({
			// default options are fine. `pages` and `assets` default to 'build'.
			// this will output a static site that can be deployed anywhere.
			fallback: null
		})
	}
};

export default config;