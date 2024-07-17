import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Lindungi DataKu',
        short_name: 'Lindungi DataKu',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        version: '1.0.0',
        icons: [
          {
            src: '/assets/svgs/lindungiaku_logo.svg',
            sizes: '72x72',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
          {
            src: '/assets/svgs/lindungiaku_logo.svg',
            sizes: '96x96',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
          {
            src: '/assets/svgs/lindungiaku_logo.svg',
            sizes: '128x128',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
          {
            src: '/assets/svgs/lindungiaku_logo.svg',
            sizes: '144x144',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
          {
            src: '/assets/svgs/lindungiaku_logo.svg',
            sizes: '152x152',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
          {
            src: '/assets/svgs/lindungiaku_logo.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
          {
            src: '/assets/svgs/lindungiaku_logo.svg',
            sizes: '384x384',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
          {
            src: '/assets/svgs/lindungiaku_logo.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /\.(?:svg)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'svg-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
        ],
      },
    }),
  ],
});
