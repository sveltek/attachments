import { defineConfig } from '@hypernym/bundler'

export default defineConfig({
  entries: [
    {
      input: './src/attachments/index.ts',
      output: './dist/index.js',
    },
    {
      dts: './src/attachments/types.ts',
      output: './dist/index.d.ts',
      externals: [/^svelte/],
    },
  ],
})
