self.addEventListener('install', event => {
  console.log('SW', event);
  self.skipWaiting();

  event.waitUnti(
    caches.open('version1')
          .then(cache => cache.add('offline.html'))
  )
});

/*Cache strategy: stale-while-revalidate*/
self.addEventListener('fetch', event => {
  //For chrome-extension, React Dev tool, Vue dev tool etc
  if (event.request.url.indexOf('http') === -1){
    return false; //shhip request
  }

  event.respondWith(
    caches.open('version1').then(cache => {
      return cache.match(event.request).then(response => {
        let fetchPromise = fetch(event.request).then(networkReponse => {
          cache.put(event.request, networkReponse.clone());
          return networkReponse;
        });
        event.waitUntil(fetchPromise);
        return response;
     })
   })
  )
});

/* Stale-while-revalidate:
 * This tells the service worker to request both the cache and network, return the cached version to the caller, and save the network response in the cache to use for next time.
 * This allows the cache to be updated while still delivering the fast, cached content to the user
 */
