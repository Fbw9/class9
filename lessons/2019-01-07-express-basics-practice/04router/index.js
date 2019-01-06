console.log(`This script illustrates how to scope a bunch of routes under a routing namespace. `);
console.log(`All routes are accessible under /books/`);
console.log(`curl localhost:3000/books`);
console.log(`curl localhost:3000/books/about`);
console.log(`curl localhost:3000/books/landingpage`);
var express    = require('express');
var app        = express();
var books = require('./books')

app.use('/books', books)

let port = 3000;
app.listen(port);
console.log('Magic happens on port', port);
