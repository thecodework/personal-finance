const express = require('express')
const app = express()
require('./routes/api')(app)

app.listen(8000, function(){
  console.log('listening on 8000')
})
