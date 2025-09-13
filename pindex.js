if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('pserviceworker.js')              
    .then(() => { console.log('Service Worker Registered'); });
}
