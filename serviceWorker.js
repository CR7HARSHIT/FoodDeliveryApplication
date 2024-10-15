const CACHE_NAME = "my-cache-v1";
const urlsToCache = [
  "/", // Root of your app
  "/index.html", // Main HTML file
  "/static/js/bundle.js", // Bundled JS files
  "/static/css/main.css", // Main CSS file
];

// Install event - Cache static assets
self.addEventListener("install", (event) => {
  console.log("[ServiceWorker] Install");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[ServiceWorker] Caching app shell");
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate event - Cleanup old caches
self.addEventListener("activate", (event) => {
  console.log("[ServiceWorker] Activate");
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("[ServiceWorker] Deleting old cache:", cache);
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

// Fetch event - Serve cached resources or fallback to network
self.addEventListener("fetch", (event) => {
  console.log("[ServiceWorker] Fetch", event.request.url);
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
