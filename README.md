Blog Post API Assignment
========================

This application stores posts to a SQLite database. It provides the following JSON API:

GET /posts
----------

Returns a JSON document, which includes all posts.

Request

GET /posts HTTP/1.1
Host: localhost:4001

Response

HTTP/1.1 200 OK
content-type: application/json

[{"post_id":1,"title":"hai","body":"hai"},
{"post_id":2,"title":"second title","body":"second body"}]


POST /post
----------

Adds a new post to the database. The new post is sent as a JSON document in the request body.

Request

POST /post HTTP/1.1
Host: localhost:4001
Content-Type: application/json

{"title":"second title", "body":"second body"}

Response

HTTP/1.1 200 OK


Downloading
===========

Download the project repository
 
git clone https://github.com/vesapehkonen/blogpost


Installation
============

Install nodejs, node-express and npm

Install node modules: npm install

Run
===

Run application: npm start

Get posts using curl: curl -X GET http://localhost:4001/posts

Insert a new post using curl: curl -H "Content-Type: application/json" -d '{"title":"Title", "body":"Body"}' http://localhost:4001/post

Licensing
=========

Please see the file called LICENSE.
