import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import UnoCSS from 'unocss/vite'
import path from 'path'
import Unimport from 'unimport/unplugin'
import babel from 'vite-plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      external: [],
    },
  },
  plugins: [
    babel({
      filter: /\.tsx?$/,
      babelConfig: {
        presets: ['@babel/preset-typescript'],
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
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
