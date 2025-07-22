import { defineConfig } from '@hypernym/bundler'

export default defineConfig({
  entries: [
    {
      input: './src/attachments/index.ts',
      output: './dist/index.mjs',
    },
    {
      dts: './src/attachments/types.ts',
      output: './dist/index.d.mts',
      externals: [/^svelte/],
    },
  ],
})
