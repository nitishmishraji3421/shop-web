const CACHE_NAME = "localwalley-v1";
const urlsToCache = [
  "index.html",
  "products.html",
  "contact.html",
  "images/icon-192.png",
  "images/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
