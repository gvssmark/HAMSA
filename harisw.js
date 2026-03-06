const CACHE_NAME = 'hamsa-v1';
const ASSETS = [
  './',
  './harinew10.html',
  './harimanifest.json',
  'https://fonts.googleapis.com/css?family=Mandali'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});