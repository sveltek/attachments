import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $: 'src',
    },
  },
  compilerOptions: { runes: true },
}

export default config
