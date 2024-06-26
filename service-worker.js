// service-worker.js
self.addEventListener("install", (event) => {
  console.log("Service Worker installed");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activated");
  event.waitUntil(self.clients.claim());
});

function pollAPI() {
  fetch("https://v2.jokeapi.dev/joke/Any")
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched joke:", data);
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          client.postMessage(data);
        });
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

setInterval(pollAPI, 1000 * 30);

pollAPI();

self.addEventListener("message", (event) => {
  if (event.data === "fetch-data") {
    pollAPI();
  }
});
