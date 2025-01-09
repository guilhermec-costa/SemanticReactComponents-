import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "SemanticComponents",
      fileName: (format) => {
        if (format === "cjs") return "index.js"; // Renomeia o arquivo cjs para index.js
        return `semantic-components.${format}.js`;
      },
      formats: ["es", "umd", "cjs"],
    },
    outDir: "./dist",
    rollupOptions: {
      external: ["react", "react-dom"], // Exclua dependências externas
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
      insertTypesEntry: true, // Garante que tipos sejam gerados
    }),
  ],
});
