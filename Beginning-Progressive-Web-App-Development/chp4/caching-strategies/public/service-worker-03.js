self.addEventListener('install', event => {
    self.skipWaiting();
    console.log('SW', event);

    event.waitUntil(
        caches.open('version1')
              .then(cache => {
                return cache.add('offline.html');
              })
    );

});

self.addEventListener('fetch', event => {
    //For chrome-extenstiion, React dev tool, Vue Dev tool etc.
    if (!(event.request.url.indexOf('http') === 0)){
        return false; //skip request
    }
    if (!navigator.onLine && event.request.url.indexOf('index.html') !== -1) {
        event.respondWith(showOfflineLanding(event));
    } else {
        event.respondWith(pullFromCache(event));
    }
});


function showOfflineLanding(event) {
    return caches.match(new Request('offline.html'));
}

/* Caching strategy: Cache first and use network as backup*/
function pullFromCache(event) {
    return caches.match(event.request)
                 .then(response => {
                     return response || fetch(event.request).then(response => {
                         console.log('fethced from network this time!');
                         return caches.open('version1')
                                      .then(cache => {
                                          cache.put(event.request, response.clone());
                                          return response;
                                      })
                     })
                 });
}

/*
 * Go to localhost:5000/another/inndex.html to see the offline page in action.
 */
