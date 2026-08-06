# Cat Gallery Browser

A lightweight, read-only web application that retrieves random cat images from the public The Cat API endpoint.

## Features

- Loads two random cat images on startup
- Refreshes the gallery on demand
- Uses native browser Fetch API
- Displays a clear error message when a request fails
- Lazy-loads images
- Runs without an API credential

## Tech stack

- JavaScript
- HTML5
- CSS3
- Fetch API
- The Cat API public image endpoint

## Run locally

This is a client-side application. Clone the repository and serve the project directory with any local static web server. Node.js and Python are not part of the application; they are only optional tools for starting a local server. Use either option below.

### Option 1 — Node.js (recommended)

If Node.js and npm are installed:

```bash
npx serve .
```

Open the local address displayed in the terminal, commonly [http://localhost:3000](http://localhost:3000).

### Option 2 — Python

On Windows, if Python is installed:

```bash
py -m http.server 8000
```

On macOS or Linux, if Python 3 is installed:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

Only one of these options is required.

## Security design

This public frontend intentionally uses only an unauthenticated, read-only endpoint. Account-level operations such as favorites and image uploads are disabled because a browser application cannot securely store a private API credential.

A future authenticated version should send privileged requests through a backend that stores credentials outside the client bundle.

## Current status

This is a functional learning project. Planned improvements include automated tests, stronger accessibility, more informative loading states, pagination, and an optional secure backend for authenticated features.

## License

Distributed under the MIT License.

## Author

[Edward Rangel](https://github.com/ejrangel7) — Senior Full Stack Software Engineer
