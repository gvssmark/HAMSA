self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('phtml').then((cache) => cache.addAll([ 
      'pindex.js',
      'psoundaryam.html',
      'images/p192.png',
      'images/p512.png',
      'param.js'
            ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );

});








