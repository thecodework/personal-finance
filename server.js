const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('Welcome To Personal Finance')
})

app.listen(3000, function(){
  console.log('listening on 3000')
})
