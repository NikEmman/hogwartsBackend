# hogwartsBackend

## Description

This Express.js server provides a REST API at `/houses`, returning hardcoded data from `data.js`. No database is used.

The `GET /houses` request supports a `name` query parameter (e.g., `/houses?name=test`). This filters the response, returning only houses whose names include `"test"`.
