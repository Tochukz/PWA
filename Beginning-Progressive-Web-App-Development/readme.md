# Beginning Progressive Web App Development
__By Dennis Sheppard__  

### Chapter 1: Introduction to Progressive Web Apps
PWAs are a set of strategies, techniques and APIs that allow developers to give users the native mobile-like experience they're used to.  

### Chapter 2: Tools to Measure Progressive Web Apps
PWA checklist that Google helpfully provides at https://developers.google.com/web/progressive-web-apps/checklist  

* Install Chrome Lighthouse plugin
* Use Audit in chrome dev tool
* Use webpagetest.org

###  Chapter 3: Service Workers  
__Service Workers__   
A service worker is a script that runs in the background of your web application. It doesn't have access to the DOM.  
Service workers run in separate thread from the UI, so they don't block or freeze the UI while they process. They act as an intermediary between your app and the Internet.  
Thing we can do with service workers:  
* Caching assets like images, scripts, or styles
* Caching entire pages
* Syncing an app that was offline once its Internet connection comes back to life.
* Push notifications
* Periodic sync
* Processing gyroscope data
* performing other actions based on a date and time

__Life Cycle of Service workers__  
* Registration
* Installation
* Waiting (sometimes)
* Activation
* Updating

Service workers make heavy use of promises.  

__Promises__  
A function that returns a promise is sometimes referred to as a __thenable__ function.  

__Update and activate a Service worker__
* Refresh the page
* Click __update__ under application in dev tool  
* Click __skip waiting__
* Verify when you see the status _activated and is running_

__Useful dev tool option under application__  
* offline: Simulate no internet connection  
* Update on reload: No need to click update button after updating service working. Updated service worker will be fetch on every page load or reload.  
* Bypass for network: Turn off service worker so none of your CSS or JavaScript is cached during development

Useful link  
[Is service worker reader](https://jakearchibald.github.io/isserviceworkerready/)  

### Chapter 4: Caching and Offline Functionality with Service Workers
Install sw-precache globally  
`$ npm install --global sw-precache`  
Generate a service worker from the root of your project  
`$ sw-precache`  
Create a config file, sw-precache-config.js that tells sw-precache exactly what you want to cache  
```
module.exports = {
    staticFileGlobs: [
        'styles/**.css',
        'styles/**.ttf',
        'images/**.*',
        '**.html'
    ],
    skipWaiting: true,
    cacheId: 'version2'
}
```
Run sw-precache again, specifying your config file:  
`$ sw-precache --config=sw-precache-coonfig.js`   

Warning: sw-toolbox and sw-precache are deprecated in favor of Workbox

### Chapter 5: Background Sync for Offline Apps with Service Workers
