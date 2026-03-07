if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./harisw.js')              
    .then(() => { console.log('Service Worker Registered'); });
}
