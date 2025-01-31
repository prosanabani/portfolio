import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import UnoCSS from 'unocss/vite'
import path from 'path'
import Unimport from 'unimport/unplugin'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    reactRouter(),
    UnoCSS(),
    Unimport.vite({
      presets: ['react'],
      dirs: [
        './src/components/**',
        './src/globals/**',
        './src/middlewares/**',
        './src/stores/**',
        './src/queries/**',
      ],
      dts: true,
    }),
  ],
  ssr: {
    noExternal: ['primereact'],
  },
})
