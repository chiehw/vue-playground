import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        'vue',
        'vue-router',
      ],
      vueTemplate: true, // template 中可用
    }),
    vue()
  ],
  resolve: {
    // 路径别名
    alias: {
      extensions: "['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']",
      '@': resolve(__dirname, 'src'),
    }
  },
  server: {
    open: true,
    port: 3005,
    host: '0.0.0.0'
  },
})
