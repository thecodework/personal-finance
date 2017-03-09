const express = require('express')
const app = express()
const router = express.Router()
var passport = require('passport')

let config= require('./config/config')
var mongoose = require('mongoose')
mongoose.Promise = require('q').Promise
mongoose.connect(config[app.settings.env])

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/frontend'))

require('./routes/api')(app, router, passport, mongoose )

var morgan = require('morgan')
app.use(morgan('dev'))

app.listen(8000, function(){
  console.log('listening on 8000')
})
module.exports = app
