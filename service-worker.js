const CACHE_NAME = "jemmaverso-app-v1";
const APP_SHELL = [
    "./index.html",
    "./fanfics.html",
    "./sobre.html",
    "./stats.html",
    "./manifest.webmanifest",
    "./style.css",
    "./extras.css",
    "./icon.png",
    "./wenclair.png",
    "./fanfics-wenclair.png",
    "./theme.js",
    "./app-install.js",
    "./data.js",
    "./translations-extra.js",
    "./titulo-traducoes.js",
    "./i18n.js",
    "./storage.js",
    "./common.js",
    "./cards.js",
    "./filters.js",
    "./app.js",
    "./extras.js",
    "./stats.js",
    "./fanfics-data.js",
    "./fanfics.js",
    "./sparkles.js"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(APP_SHELL))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys
                .filter(key => key.startsWith("jemmaverso-app-") && key !== CACHE_NAME)
                .map(key => caches.delete(key))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", event => {
    const request = event.request;
    if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;

    event.respondWith((async () => {
        let response;
        try {
            response = await fetch(request);
        } catch (error) {
            const cachedResponse = await caches.match(request);
            if (cachedResponse) return cachedResponse;
            if (request.mode === "navigate") {
                const homePage = await caches.match("./index.html");
                if (homePage) return homePage;
            }
            throw error;
        }

        if (response.ok) {
            try {
                const cache = await caches.open(CACHE_NAME);
                await cache.put(request, response.clone());
            } catch (error) {
                console.error("Não foi possível atualizar o cache offline.", error);
            }
        }
        return response;
    })());
});
