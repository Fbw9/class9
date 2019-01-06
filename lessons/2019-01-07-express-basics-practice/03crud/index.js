console.log('Simple CRUD example');
console.log('Hit the endpoints and see the response and the console output');
var express    = require('express');
var app        = express();

console.log(`POST: curl -X POST localhost:3000`);
//CODE HERE for Create

console.log(`GET: curl localhost:3000`);
//CODE HERE for Read All

console.log(`GET:ID: curl localhost:3000/somerandomid`);
//CODE HERE for Read

console.log(`PUT: curl -X PUT localhost:3000/somerandomid`);
//CODE HERE for Update

console.log(`DELETE: curl -X DELETE localhost:3000/somerandomid`);
//CODE HERE for Delete

//TASK
//Create a simple CRUD application on port 3000 using app.post(), app.get(), app.put(), and app.delete()
//It doesn't have to be particularly exciting
