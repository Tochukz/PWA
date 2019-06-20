self.addEventListener('install', event => {
    self.skipWaiting();
    console.log('SW', event);
});

self.addEventListener('fetch', event => {
    //For chrome-extenstiion, React dev tool, Vue Dev tool etc.
    if (!(event.request.url.indexOf('http') === 0)){
        return false; //skip request
    }
    /* Dynamic caching */
    event.respondWith(
        caches.match(event.request)
              .then(response => {
                  return response || fetch(event.request).then(response => {
                      console.log('fetched from network this time!');
                      return caches.open('version1').then(cache => {
                          cache.put(event.request, response.clone());
                          return response;
                      });
                  });
              })
    );
});

/*
 * Dynamic caching
 * Intercept each file as it is returning from the network and update the cache using cache.put().
 */
