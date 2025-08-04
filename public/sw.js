const CACHE_NAME = 'eligible-ai-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

const STATIC_ASSETS = [
  '/',
  '/src/main.tsx',
  '/src/index.css',
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
      self.location.origin,
      'https://eligibly.ai',
      'https://www.eligibly.ai'
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

// Fetch event - Secure network first with fallback
self.addEventListener('fetch', (event) => {
  // Only handle same-origin requests
  if (!isValidOrigin(event.request.url)) {
    return;
  }

  // Skip non-GET requests for security
  if (event.request.method !== 'GET') {
    return;
  }

  if (event.request.destination === 'image') {
    event.respondWith(
      caches.open(DYNAMIC_CACHE).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response && isSecureResponse(response)) {
            return response;
          }
          return fetch(event.request).then((networkResponse) => {
            if (isSecureResponse(networkResponse)) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          });
        });
      })
    );
  } else {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (isSecureResponse(response)) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => {
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
});