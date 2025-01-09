import { defineConfig } from "vite";

import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "./packages/semanticComponents/src/index.ts",
      name: "SemanticReactUIComponents",
      fileName: (format) => `semantic-components.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [
    dts({
      outDir: "./packages/semanticComponents/dist",
      insertTypesEntry: true,
    }),
  ],
});
