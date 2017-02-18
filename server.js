



const express = require('express')
const app = express()
require('./routes/api')(app)
// if our user.js file is at app/models/user.js
var User = require('./models/User');
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/personalFinance')

<<<<<<< HEAD


app.listen(3000, function(){
  console.log('listening on 3000')
=======
// create a new user called chris
var ashish = new User({
  name: 'Ashish',
  username: 'imrealshu',
  password: 'secret'
})

// call the custom method. this will just add -dude to his name
// user will now be Chris-dude
// ashish.dudify(function(err, name) {
//   if (err){
//     throw err
//   }
//   console.log('Your new name is ' + name)
// })

// call the built-in save method to save to the database
ashish.save(function(err) {
  if (err) {
    console.log(err)
  }
  console.log('User saved successfully!');
})
app.listen(8000, function(){
  console.log('listening on 8000')
>>>>>>> ea92c2ef00e131ee1396abee4ee81ea5b52d176c
})
