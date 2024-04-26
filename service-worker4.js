const CACHE_NAME = 'pwa-cache-v1';

const urlsToCache = [

    '/',

    '/index4.html',

    '/styles4.css',

    '/script4.js',

    '/manifest4.json',

    '/192.png',

    '/512x.png'

];



self.addEventListener('install', event => {

    event.waitUntil(

        caches.open(CACHE_NAME)

            .then(cache => cache.addAll(urlsToCache))

    );

});



self.addEventListener('fetch', event => {

    event.respondWith(

        caches.match(event.request)

            .then(response => {

                if (response) {

                    return response;

                }

                return fetch(event.request);

            })

    );

});