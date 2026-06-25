// Pivot juin 2026 — kill switch: unregister and clear all caches.
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(event){
  event.waitUntil((async function(){
    const keys = await caches.keys();
    await Promise.all(keys.map(function(k){ return caches.delete(k); }));
    await self.registration.unregister();
    const clients = await self.clients.matchAll();
    clients.forEach(function(c){ c.navigate(c.url); });
  })());
});
// Bypass fetch handling entirely so the network always wins.
self.addEventListener('fetch', function(){});
/* legacy code removed
const CACHE_NAME = 'eligible-ai-v2';

// Cache stratégique pour l'écoconception
const STATIC_ASSETS = [
  '/',
  '/src/main.tsx',
  '/src/index.css',
  '/manifest.json'
];

// Ressources critiques uniquement
const CRITICAL_RESOURCES = [
  '/src/components/Hero.tsx',
  '/src/assets/js-development-workspace.jpg'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Security helper function
function isValidOrigin(url) {
  try {
    const requestUrl = new URL(url);
    const allowedOrigins = [
      self.location.origin
    ];
    return allowedOrigins.includes(requestUrl.origin);
  } catch {
    return false;
  }
}

// Security validation for responses
function isSecureResponse(response) {
  return response && 
         response.status === 200 && 
         response.type === 'basic' &&
         response.headers.get('content-type');
}

// Stratégie de cache optimisée pour l'écoconception
self.addEventListener('fetch', (event) => {
  // Only handle same-origin requests
  if (!isValidOrigin(event.request.url)) {
    return;
  }

  // Skip non-GET requests for security
  if (event.request.method !== 'GET') {
    return;
  }

  // Avoid caching navigation requests to prevent sensitive data leakage
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match('/'))
    );
    return;
  }

  // Cache intelligent pour les images (stratégie cache-first)
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.open(IMAGE_CACHE).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response && isSecureResponse(response)) {
            return response;
          }
          return fetch(event.request).then((networkResponse) => {
            if (isSecureResponse(networkResponse)) {
              // Cache agressif pour les images (économie bande passante)
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => {
            // Fallback gracieux sans image cassée
            return new Response('', { status: 204 });
          });
        });
      })
    );
  } 
  // Stratégie network-first pour les ressources critiques
  else if (CRITICAL_RESOURCES.some(resource => event.request.url.includes(resource))) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (isSecureResponse(response)) {
            const responseClone = response.clone();
            caches.open(STATIC_CACHE).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
  }
  // Cache-first pour les autres ressources (économie d'énergie)
  else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response && isSecureResponse(response)) {
          return response;
        }
        return fetch(event.request).then((networkResponse) => {
          if (isSecureResponse(networkResponse)) {
            const responseClone = networkResponse.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        });
      })
    );
  }
});