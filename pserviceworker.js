self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('p').then((cache) => cache.addAll([ 
      'pindex.js',
      'p.html',
      'images/p192.png',
      'images/p.png',
            ])),
  );
});


self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});