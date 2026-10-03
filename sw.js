var C='lecteur-v3',F=['./','./index.html','./manifest.webmanifest','./icon-180.png','./jszip.min.js'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F);}));self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==C;}).map(function(n){return caches.delete(n);}));}));});
self.addEventListener('fetch',function(e){e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request);}));});
