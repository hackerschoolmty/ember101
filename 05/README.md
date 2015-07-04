# Borrowers App

Keep track of items you lend to your friends.

## Backend

We'll consume and store our data from a public API under
http://api.ember-cli-101.com. The following are the API end-points:

<table>
  <thead>
    <tr>
      <th>Verb</th>
      <th>URI Pattern</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>GET</td><td>/api/articles</td></tr>
    <tr><td>POST</td><td>/api/articles</td></tr>
    <tr><td>GET</td><td>/api/articles/:id</td></tr>
    <tr><td>PATCH</td><td>/api/articles/:id</td></tr>
    <tr><td>PUT</td><td>/api/articles/:id</td></tr>
    <tr><td>DELETE</td><td>/api/articles/:id</td></tr>
    <tr><td>GET</td><td>/api/friends</td></tr>
    <tr><td>POST</td><td>/api/friends</td></tr>
    <tr><td>GET</td><td>/api/friends/:id</td></tr>
    <tr><td>PATCH</td><td>/api/friends/:id</td></tr>
    <tr><td>PUT</td><td>/api/friends/:id</td></tr>
    <tr><td>DELETE</td><td>/api/friends/:id</td></tr>
  </tbody>
</table>

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
