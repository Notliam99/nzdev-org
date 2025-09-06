import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [tailwindcss(), solid()],
    preview: {
        allowedHosts: ["nzdev.org", "*.nzdev.org", "127.0.0.1", "localhost"]
    }
})
