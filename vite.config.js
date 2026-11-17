import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

// Easter egg: /papel (o /papel/) abre la variante "cuaderno" (papel.html).
// Sin esto, el servidor de desarrollo y `vite preview` devolverían la página principal.
const rutaPapel = () => {
  const reescribir = (server) => {
    server.middlewares.use((req, _res, next) => {
      const [ruta, consulta = ""] = (req.url || "").split("?");
      if (ruta === "/papel" || ruta === "/papel/") {
        req.url = "/papel.html" + (consulta ? `?${consulta}` : "");
      }
      next();
    });
  };

  return {
    name: "ruta-papel",
    configureServer: reescribir,
    configurePreviewServer: reescribir,
  };
};

// Dos páginas: la principal (index.html) y la variante "cuaderno" (papel.html).
export default defineConfig({
  plugins: [react(), rutaPapel()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        papel: fileURLToPath(new URL("./papel.html", import.meta.url)),
      },
    },
  },
});
