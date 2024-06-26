# JokeAPI Background Polling Example

This project demonstrates how to use a service worker to poll the JokeAPI in the background and update the UI with new jokes every 15 minutes.

## Project Structure

- `index.html`: A simple HTML file to display the joke.
- `main.js`: The main JavaScript file that registers the service worker and handles incoming messages.
- `service-worker.js`: The service worker file that polls the JokeAPI and sends the data to the clients.

## Getting Started

### Prerequisites

- A web browser that supports service workers (e.g., Chrome, Firefox, Edge).

### Setup

1. Clone this repository:

```bash
git clone https://github.com/yourusername/jokeapi-polling.git
cd jokeapi-polling
Serve the files using a local server. You can use a simple HTTP server like http-server or python's built-in server:
bash
Copy code
# Using http-server
npx http-server .

# Using Python 3
python -m http.server
Open your browser and navigate to http://localhost:8080 (or the port specified by your server).
Files
index.html: Contains the HTML structure for displaying the joke.
main.js: Registers the service worker and handles incoming messages from the service worker.
service-worker.js: Contains the logic for polling the JokeAPI and sending data to clients.
How It Works
The main.js file registers the service worker.
The service-worker.js file polls the JokeAPI (https://v2.jokeapi.dev/joke/Any) every 30 seconds.
When a new joke is fetched, the service worker sends the data to all connected clients.
The client updates the UI with the new joke.
