var mongoose = require('mongoose')

var categoryScema = new mongoose.Schema({
  name: {type: String , required: true},
  type: String
})

mongoose.model('Category' , categoryScema)

module.exports = Category