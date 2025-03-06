import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    base: 'http://mega-shield.ru/',
    plugins: [
        laravel({
            input: ['resources/css/style.css', 'resources/js/App.jsx'],
            refresh: true,
        }),
    ],
});
