## Beginning Progressive Web App Deveopment
### Chapter 1: Introduction to Progressive Web Apps
PWAs are a set of strategies, techniques and APIs that allow developers to give users the native mobile-like experince they're used to.  

### Chapter 2: Tools to Measure Progressive Web Apps
PWA checklist that Google helpfully provides at https://developers.google.com/web/progressive-web-apps/checklist  

* Install Chrome Lighthouse plugin
* Use Audit in chrome dev tool
* Use webpagetest.org

###  Chapter 3: Service Workers
A function that returns a promise is sometimes referred to as a __thenable__ function.  

__Update and activate a Service worker__
* Refresh the page
* Click __update__ under application in dev tool  
* Click __skip waiting__
* Verify when you see the status _activated and is running_

__Useful dev tool option under application__  
* offline: Simulate no internet connection  
* Update oon realod: No need to click update button after updating service working. Updated service worker will be fetchd on every page load or reload.  
* Bypass for network: Turn off service worker so none of your CSS or JavaScript is cached during development

Userfule link  
[Is service worker reader](https://jakearchibald.github.io/isserviceworkerready/)  

### Chapter 4: Caching and Offliine Funnctionaliity with Service Workers
Install sw-precache globally  
`$ npm install --global sw-precache`  
Generate a service worker from the root of your project  
`$ sw-precache`  