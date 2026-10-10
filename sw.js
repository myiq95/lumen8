
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  // Network first, fallback to cache not needed for single page
  e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
});
