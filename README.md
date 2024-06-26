# JokeAPI Background Polling Example

This project demonstrates how to use a service worker to poll the JokeAPI in the background and update the UI with new jokes every 30 seconds.

## Project Structure

- `index.html`: A simple HTML file to display the joke.
- `main.js`: The main JavaScript file that registers the service worker and handles incoming messages.
- `service-worker.js`: The service worker file that polls the JokeAPI and sends the data to the clients.
