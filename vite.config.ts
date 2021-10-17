import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // const env = loadEnv(mode, process.cwd());

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        "@views": resolve(__dirname, "./src/views"),
        "@utils": resolve(__dirname, "./src/utils"),
        "@hooks": resolve(__dirname, "./src/hooks"),
        "@components": resolve(__dirname, "./src/components"),
      },
    },
  };
});
