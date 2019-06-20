let version = 'version1'

self.addEventListener('install', event=> {
  console.log('SW', event);
  self.skipWaiting();

  event.waitUntil(
    caches.open(version).then(cache => cache.add('offline.html'))
  )
})

function setupPromise(promise) {
  return new Promise((resolve, reject) => {
    promise.forEach(promise => promise.then(resolve));
  });
}

/** Caching strategy: Fastest caching strategy */
self.addEventListener('fetch', event => {
  //Skip request for chrome-extension, Vue, React dev tool etc.
  if(event.request.url.indexOf('http') === -1){
    return false;
  }
  event.respondWith(setupPromise([
    caches.match(event.request),
    fetch(event.request)
  ]));
});

/* Fastest caching strategy
 * Ask for both the cached resource as well as the network resource, and whichever one is faster is the one that gets to respond to the request
 */
