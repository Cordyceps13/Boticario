import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  main: {
    entry: 'src/main/index.js',
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    entry: 'src/preload/index.js',
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [
      react(),
      viteStaticCopy({
        targets: [
          {
            src: 'src/database/*.js',
            dest: 'database'
          }
        ]
      })
    ]
  },
})
