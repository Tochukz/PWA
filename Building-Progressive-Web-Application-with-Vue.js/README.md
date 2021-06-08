# Building Progressive Web Application with Vue.js (2020)  
__By Carlos Rojas__   
[Github Code](https://github.com/carlosrojaso/appress-book-pwa)

## Chapter 1: Making Your First Progressive Web App  
PWAs are the intersection between a web interaction and a mobile app user experience.  

A progressive web application is a single page application that possesses the following:  
1. A _manifest file__  
2. An _app icon_  
3. A _Service worker_      

__The App Shell Model__    
The App Shell Model included the minimum required HTML, CSS, and JS needed to activate the user interface. We can think of the App Shell Model as the skeleton of our UI and the core components necessary to get our app off the ground. The App Shell Model is great to use in apps with a service worker. We can cache our application shell so that it works offline and populates its content using JS.    

Create the Vue application:     
```
> vue create vue-note-app
> cd vue-note-app
> yarn serve
```  
Add _Vuetify_ to the _Vue_
 project   
```
> vue add vuetify  
```
