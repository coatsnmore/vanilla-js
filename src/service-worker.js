// caching
var CACHE_NAME = 'app-cache';
var urlsToCache = [
    '/styles.css'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );

    console.log(`worker installed..`);
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // cache hit - return response
                if (response) {
                    console.log(`cache hit`);
                    return response;
                }
                // otherwise fetch it 
                return fetch(event.request);
            }
            )
    );
});
