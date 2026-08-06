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

No build process or package installation is required.

1. Clone the repository.
2. Serve the project directory with a local static server.
3. Open the local URL in your browser.

Example with Python:

```bash
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Security design

This public frontend intentionally uses only an unauthenticated, read-only endpoint. Account-level operations such as favorites and image uploads are disabled because a browser application cannot securely store a private API credential.

A future authenticated version should send privileged requests through a backend that stores credentials outside the client bundle.

## Current status

This is a functional learning project. Planned improvements include automated tests, stronger accessibility, more informative loading states, pagination, and an optional secure backend for authenticated features.

## License

Distributed under the MIT License.

## Author

[Edward Rangel](https://github.com/ejrangel7) — Senior Full Stack Software Engineer
