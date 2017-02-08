const express = require('express')
const app = express()
require('./routes/api')(app)

app.listen(3000, function(){
  console.log('listening on 3000')
})
