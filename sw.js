// Service Worker - 항공방제 관리시스템
const CACHE_NAME = 'hanbang-v1';
const urlsToCache = [
  '/namil/',
  '/namil/index.html'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
