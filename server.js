const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/frontend'))

require('./routes/api')(app)
// if our user.js file is at app/models/user.js

var mongoose = require('mongoose')

if(process.env.NODE_ENV === 'test') {
    mongoose.connect('mongodb://localhost/personalFinanceTest')
}else{
    mongoose.connect('mongodb://localhost/personalFinance')
}

app.listen(8000, function(){
  console.log('listening on 8000')
})
module.exports = app
