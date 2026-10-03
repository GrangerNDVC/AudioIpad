var C='lecteur-v6',F=['./','./index.html','./manifest.webmanifest','./icon-180.png','./jszip.min.js'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return Promise.all(F.map(function(u){return c.add(u).catch(function(){})}))}));self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==C;}).map(function(n){return caches.delete(n);}));}).then(function(){return self.clients.claim()}));});
self.addEventListener('fetch',function(e){var u=new URL(e.request.url);if(u.origin!==location.origin)return;
 var net=e.request.mode==='navigate'||/catalogue\.json$|\/couvertures\/|index\.html$|sw\.js$/.test(u.pathname);
 if(net){e.respondWith(fetch(e.request).then(function(r){if(r.ok){var c=r.clone();caches.open(C).then(function(x){x.put(e.request,c)})}return r}).catch(function(){return caches.match(e.request).then(function(r){return r||caches.match('./index.html')})}));return}
 e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request)}))});
