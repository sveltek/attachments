import adapter from '@sveltejs/adapter-static'
import type { Config } from '@sveltejs/kit'

const config: Config = {
  kit: {
    adapter: adapter(),
    alias: {
      $: 'src',
    },
  },
  compilerOptions: { runes: true },
}

export default config
