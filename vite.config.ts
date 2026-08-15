import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Automatically compress and convert bundled images to WebP,
    // and expose responsive srcset variants when requested.
    imagetools({
      defaultDirectives: (url) => {
        if (/\.(jpe?g|png)$/i.test(url.pathname)) {
          if (url.searchParams.has("responsive")) {
            return new URLSearchParams({
              format: "webp",
              quality: "78",
              w: "480;768;1200;1600",
              as: "srcset",
            });
          }
          return new URLSearchParams({ format: "webp", quality: "80" });
        }
        return new URLSearchParams();
      },
    }),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssMinify: true,
    minify: "esbuild",
  },
}));
