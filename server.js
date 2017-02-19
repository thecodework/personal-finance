const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/frontend'))

require('./routes/api')(app)
// if our user.js file is at app/models/user.js
var User = require('./models/User');
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/personalFinance')

app.listen(8000, function(){
  console.log('listening on 8000')
})
