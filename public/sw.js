// Pivot juin 2026 — kill switch: unregister old SW and clear all caches.
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(event){
  event.waitUntil((async function(){
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map(function(k){ return caches.delete(k); }));
      await self.registration.unregister();
      const clients = await self.clients.matchAll();
      clients.forEach(function(c){ try { c.navigate(c.url); } catch(e){} });
    } catch(e){}
  })());
});
self.addEventListener('fetch', function(){});
