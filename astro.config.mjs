/**
 * @file Astro build and Vite plugin configuration for hoo-wallet.
 * Enables static site output and integrates Tailwind CSS v4 via `@tailwindcss/vite`.
 */
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

export default defineConfig({
    output: "static",
    vite: {
        plugins: [tailwindcss()],
    },
})
