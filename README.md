# hogwartsBackend

## Description

This Express.js server provides a REST API at `/houses`, returning hardcoded data from `data.js`. No database is used.

The `GET /houses` request supports a `name` query parameter (e.g., `/houses?name=test`). This filters the response, returning only houses whose names include `"test"`.

## How to run locally

- Navigate to the desired folder, Clone the repository using the following command: `git clone https://github.com/NikEmman/hogwartsBackend` - Change into the repository directory: `cd hogwartsBackend`
- Run `npm install` to install dependencies
- Run `npm run dev` to start the server. You can call the API at `http://localhost:3001/houses` on the browser, to see the json response.
- Run `npm test` to execute the unit tests for the API. These tests verify that the `GET /houses` endpoint functions correctly, returning expected results, handling query parameters, and ensuring responses are in JSON format.
