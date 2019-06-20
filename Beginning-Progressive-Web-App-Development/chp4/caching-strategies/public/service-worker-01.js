self.addEventListener('install', event => {
    self.skipWaiting();
    console.log('SW Installed:', event);

    /** Defining a static cache */
    if (!('caches' in self)) return;
    event.waitUntil(
      caches.open('version1').then(cache => {
        return cache.addAll(
            [
                '/index.html',
                '/css/style.css',
                '/img/meal.png'
            ]
        )
      })
    )
});

self.addEventListener('activate', event => console.log('SW activated', event));

self.addEventListener('fetch', event => {
    //event.respondWith(new Response('Ahhhh'));
    //Using the cache
    event.respondWith(caches.match(event.request)
                            .then(response =>
                               response || fetch(event.request)
                            )
                     );

});

/*
 * The 'caches' property is actually also available on 'window'. That means you can technically cache items from anywhere in your app.
 */
