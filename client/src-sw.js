const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
// const { warmStrategyCache } = require('workbox-recipes')
const { CacheFirst, StaleWhileRevalidate } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');


precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
cacheName: 'page-cache',
plugins: [
  new CacheableResponsePlugin({
    statuses: [0, 200],
  }),
  new ExpirationPlugin({
    maxAgeSeconds: 30 * 24 * 60 * 60,
  }),
],
});

warmStrategyCache({
urls: ['/index.html', '/'],
strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);


// Asset Caching: CSS, JS, Worker Scripts
registerRoute(
// Define the function that determines which requests to cache
({ request }) => ['style', 'script', 'worker'].includes(request.destination),
new StaleWhileRevalidate({
  cacheName: 'asset-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxEntries: 50,
      maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
    }),
  ],
})
);

// Implementing offlineFallback
offlineFallback({
  pageFallback: '/offline.html',
  // Add other fallbacks as necessary
});

