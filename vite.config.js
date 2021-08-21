import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const {resolve} = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8000 // 配置启用的端口号
  },
  resolve: {
    // 设置别名
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      // 引入公用的样式
      scss: {
        additionalData: '@import "@/styles/mixins.scss";'
      }
    }
  }
})
