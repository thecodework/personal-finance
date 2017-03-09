const express = require('express')
const app = express()
const router = express.Router()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let config= require('./config/config')

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/frontend'))

require('./routes/api')(app, router )

var mongoose = require('mongoose')
mongoose.Promise = require('q').Promise

var morgan = require('morgan')
var passport = require('passport')

// Log requests to console
app.use(morgan('dev'))
app.use(passport.initialize())

//mongoose.connect(config.test)
mongoose.connect(config[app.settings.env])
require('./config/passport')(passport, mongoose)


// Protect dashboard route with JWT
router.get('/dashboard', passport.authenticate('jwt', { session: false }), function(req, res) {
  res.send('It worked! User id is: ' + req.user._id + '.')
})

// Set url for API group routes
app.use('/api', router)

app.listen(8000, function(){
  console.log('listening on 8000')
})
module.exports = app
