// @lovable.dev/vite-tanstack-config already includes the following when enabled:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, Cloudflare build support,
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// For Vercel, disable Cloudflare support and add Nitro explicitly, as recommended by Vercel.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  cloudflare: false,
  plugins: [nitro()],
  tanstackStart: {
    server: { entry: "server" },
  },
});
