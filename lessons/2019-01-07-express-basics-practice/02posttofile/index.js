const express = require('express')
const fs = require('fs')
const app = express()


app.listen(3000, () => {
  console.log('To append text to the file run:');
  console.log('curl -X POST "http://localhost:3000?username=SantaClaus"');
})

// TASK
// Use app.post() to post a username to the included post-requests file.
// Go to the post-requests.log file to see the format
// app.listen() has already been created for you, so don't touch that


