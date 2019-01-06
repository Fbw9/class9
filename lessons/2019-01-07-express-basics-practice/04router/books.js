var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// CODE HERE: define the home page route

// CODE HERE: define the about route

// CODE HERE: define another sub route


module.exports = router
