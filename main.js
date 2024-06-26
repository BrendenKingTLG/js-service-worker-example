if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(function (registration) {
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch(function (error) {
      console.error("Service Worker registration failed:", error);
    });

  navigator.serviceWorker.addEventListener("message", (event) => {
    console.log("Received data from Service Worker:", event.data);
    const jokeContainer = document.getElementById("joke-container");
    if (event.data.type === "single") {
      jokeContainer.innerText = event.data.joke;
    } else {
      jokeContainer.innerHTML = `${event.data.setup} <br> ${event.data.delivery}`;
    }
  });
} else {
  console.log("Service Workers are not supported in this browser.");
}
