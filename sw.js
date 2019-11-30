const cacheName = 'hello-pwa';
const filesToCache = [
    '/',
    '/index.html',
    '/dist/styles/main.css',
    '/dist/scripts/main.js'
];

// /* Start the service worker and cache all of the app's content */
// self.addEventListener('install', (e) => {
//     if (self.location.hostname === 'localhost') return;
//     e.waitUntil(
//         caches.open(cacheName).then((cache) => {
//             return cache.addAll(filesToCache);
//         })
//     );
// });

// /* Serve cached content when offline */
// self.addEventListener('fetch', (e) => {
//     if (self.location.hostname === 'localhost') return;
//     e.respondWith(
//         caches.match(e.request).then((response) => {
//             return response || fetch(e.request);
//         })
//     );
// });

// self.addEventListener('activate', (e) => {
//     e.waitUntil(caches.keys().then((cacheNames) => {
//         return Promise.all(cacheNames.map((cacheName) => {
//             if (filesToCache.indexOf(cacheName) === -1) return caches.delete(cacheName);
//         }));
//     }));
// });