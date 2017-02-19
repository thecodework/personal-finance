const express = require('express')
const app = express()
require('./routes/api')(app)

var User = require('./models/User');
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/personalFinance')

app.listen(8000, function(){
  console.log('listening on 8000')
})
