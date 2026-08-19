import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: if you deploy to USERNAME.github.io/REPO-NAME (a project site),
// set base to "/REPO-NAME/". If you deploy to USERNAME.github.io (a user site),
// set base to "/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
