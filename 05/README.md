# Borrowers App

Keep track of items you lend to your friends.

## Backend

We'll consume and store our data from a public API under
http://api.ember-cli-101.com. The following are the API end-points:

|------------------------------|
| Verb   |   URI Pattern       |
|-------------------------------
| GET    | /api/articles       |
| POST   | /api/articles       |
| GET    | /api/articles/:id   |
| PATCH  | /api/articles/:id   |
| PUT    | /api/articles/:id   |
| DELETE | /api/articles/:id   |
| GET    | /api/friends        |
| POST   | /api/friends        |
| GET    | /api/friends/:id    |
| PATCH  | /api/friends/:id    |
| PUT    | /api/friends/:id    |
| DELETE | /api/friends/:id    |
|------------------------------|

## Initial configuration

* Specifying our own adapter.
* Start the server with option `--proxy http://api.ember-cli-101.com`

## Features

* List our friends.
* Add a new friend.
* View a friend profile.
* Update a friend profile.
* Delete a friend.
* View user's articles (nested).
