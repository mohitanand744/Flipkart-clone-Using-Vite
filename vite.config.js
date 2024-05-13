import { defineConfig } from "vite";
import { resolve } from "path";
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        cart: resolve(__dirname, "cartProducts.html"),
      },
    },
  },
});
