import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            publicDirectory: 'public_html',
            input: ['resources/css/style.css', 'resources/js/App.jsx'],
            refresh: true,
        }),
    ],
});
