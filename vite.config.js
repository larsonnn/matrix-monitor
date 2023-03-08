import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import nodePolyfills from "rollup-plugin-polyfill-node";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // needed for matrix-js-sdk:
  rollupOptions: {
    // Enable rollup polyfills plugin
    // used during production bundling
    plugins: [nodePolyfills()],
  },
  define: { global: "window" },
});
