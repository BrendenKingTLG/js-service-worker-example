self.addEventListener("install", (event) => {
  console.log("Service Worker installed");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activated");
  event.waitUntil(self.clients.claim());
});

function pollAPI() {
  console.log("Polling API...");
  fetch("https://v2.jokeapi.dev/joke/Any")
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched joke:", data);
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          console.log("Sending data to client:", client);
          client.postMessage(data);
        });
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

setInterval(pollAPI, 1000 * 10);

pollAPI();

self.addEventListener("message", (event) => {
  console.log("Received message from client:", event.data);
  if (event.data === "fetch-data") {
    pollAPI();
  }
});
