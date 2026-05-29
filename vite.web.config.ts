import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { loadEnv } from "vite";
import { resolve } from "path";
import { readFileSync, writeFileSync } from "fs";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const gaMeasurementId = env.VITE_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";

  return {
    plugins: [
      react(),
      {
        name: "replace-ga-id-in-html",
        closeBundle() {
          // Replace __GA_MEASUREMENT_ID__ placeholder in built HTML
          const indexPath = resolve(__dirname, "dist/web/src/web/index.html");
          try {
            const html = readFileSync(indexPath, "utf-8");
            const replaced = html.replace(/__GA_MEASUREMENT_ID__/g, gaMeasurementId);
            writeFileSync(indexPath, replaced, "utf-8");
          } catch {
            // index.html may not exist if build failed; ignore
          }
        },
      },
    ],
    define: {
      "import.meta.env.VITE_GA_MEASUREMENT_ID": JSON.stringify(gaMeasurementId),
    },
    build: {
      outDir: "dist/web",
      emptyOutDir: true,
      rollupOptions: {
        input: resolve(__dirname, "src/web/index.html"),
        output: {
          entryFileNames: "assets/[name]-[hash].js",
          chunkFileNames: "assets/[name]-[hash].js",
          assetFileNames: "assets/[name]-[hash][extname]",
          // Flatten source directory structure: src/web/index.html → dist/web/index.html
          dir: resolve(__dirname, "dist/web"),
        },
      },
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
  };
});
