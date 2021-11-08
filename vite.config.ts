import { defineConfig, UserConfig } from "vite";
import pluginAutoImport from "vite-plugin-style-import";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default (): UserConfig => {
  return {
    css: {
      preprocessorOptions: {
        less: {
          // 不加报错
          javascriptEnabled: true,
        },
      },
    },

    plugins: [
      vue(),
      pluginAutoImport({
        libs: [
          {
            esModule: true,
            libraryName: "ant-design-vue",
            resolveStyle: (name) => `ant-design-vue/es/${name}/style/index`,
          },
        ],
      }),
    ],

    resolve: {
      alias: {
        "@views": resolve(__dirname, "./src/views"),
        "@utils": resolve(__dirname, "./src/utils"),
        "@hooks": resolve(__dirname, "./src/hooks"),
        "@components": resolve(__dirname, "./src/components"),
        "@AppService": resolve(__dirname, "./src/AppService.ts"),
      },
    },
  };
};

// https://vitejs.dev/config/
// export default defineConfig(() => {
//   return {
//     plugins: [vue()],
//     resolve: {
//       alias: {
//         "@views": resolve(__dirname, "./src/views"),
//         "@utils": resolve(__dirname, "./src/utils"),
//         "@hooks": resolve(__dirname, "./src/hooks"),
//         "@components": resolve(__dirname, "./src/components"),
//         "@AppService": resolve(__dirname, "./src/AppService.ts"),
//       },
//     },

//     // 不知道这样引和main.ts引的区别，不是很好用
//     // css: {
//     //   preprocessorOptions: {
//     //     scss: {
//     //       additionalData: '@import "./src/assets/scss/color.scss";',
//     //     },
//     //   },
//     // },
//   };
// });
