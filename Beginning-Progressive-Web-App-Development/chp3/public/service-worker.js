self.addEventListener('install', event => console.info('Installed Service worker installed', event));

/** Remove waiting state to make sure only one service worker exists at a time on update */
self.addEventListener('install', event => {
    self.skipWaiting();
    console.info('updated service worker installed', event);
});

self.addEventListener('activate', event => console.info('Updated Service worker is activated', event));

/*
 * The self.skipWaiting() method will skip the waiting phase of service worker life cycle.
 * This will make your app's service worker to move straight from install to activation, skipping the waiting phase when users close all tabs of the app and re-open.
 * The app also moves straight to activation when dev clicks the update link in dev tools.
 */