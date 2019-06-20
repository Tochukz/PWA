const version = 'version2';

self.addEventListener('install', event => {
  console.log('SW Installed', event);
  self.skipWaiting();

  event.waitUntil(caches.open(version).then(cache => 
    cache.addAll([
      'index.html',
      'offline.html',
      'css/style.css',
      'js/app.js',
      'img/meal.png'
    ]))
  );
});

/** Caching strategy: Network first, with cache as backup */
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(err =>
      caches.open(version).then(cache => cache.match(event.request))
    )
  )
});

/** Updating the cache by delete onld version and creating new version */
self.addEventListener('activate', event => {
  const CURRENT_CACHE = version;
  event.waitUntil(
    caches.keys().then(cacheKeys => {
      return Promise.all(
        cacheKeys.map(cacheKey => {
          if (cacheKey !== CURRENT_CACHE) {
            console.log(`Deleteing cache: ${cacheKey}`)
            return caches.delete(cacheKey);
          }
        })
      )
    })
  )
})

