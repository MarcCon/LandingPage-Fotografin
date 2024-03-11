import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  define: {
    global: {}, // Definiert `global` als leeres Objekt, oder du kannst es durch `window` ersetzen
  },
});
