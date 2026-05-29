import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { loadEnv } from "vite";
import { resolve } from "path";
import type { Plugin } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const gaMeasurementId = env.VITE_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";

  // Vite plugin: replace __GA_MEASUREMENT_ID__ placeholder in index.html
  const gaHtmlTransform: Plugin = {
    name: "ga-html-transform",
    transformIndexHtml(html) {
      return html.replace(/__GA_MEASUREMENT_ID__/g, gaMeasurementId);
    },
  };

  return {
    plugins: [react(), gaHtmlTransform],
    define: {
      "import.meta.env.VITE_GA_MEASUREMENT_ID": JSON.stringify(gaMeasurementId),
    },
    server: {
      host: true,
      port: 5173,
      proxy: {
        "/api": "http://localhost:3001",
      },
    },
    build: {
      outDir: "dist/client",
      rollupOptions: {
        input: {
          client: resolve(__dirname, "src", "client", "index.html"),
          calculator: resolve(__dirname, "src", "web", "index.html"),
          dashboard: resolve(__dirname, "src", "client", "dashboard.html"),
        },
        output: {
          entryFileNames: "assets/[name]-[hash].js",
          chunkFileNames: "assets/[name]-[hash].js",
          assetFileNames: "assets/[name]-[hash][extname]",
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
