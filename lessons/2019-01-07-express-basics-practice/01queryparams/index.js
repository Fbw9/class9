const express = require('express')
const app = express()


// TASK
// Create an express application with one route ('/') that runs on http://localhost:3000.
// When one goes to http://localhost:3000?username=SantaClaus,
// the site should display Hello Santa Claus.
// This should change depending on what name is inputted after username=
// Hint: use app.get() here


app.listen(3000, () => {
  console.log('To hit the endpoint, run:');
  console.log('curl "http://localhost:3000?username=MrSnow"');
})
