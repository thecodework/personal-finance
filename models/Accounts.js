var mongoose = require('mongoose')


var accountSchema = new mongoose.Schema({
  name: {type: String , required: true},//bank account name
  initialBalance : Number
})

var Account = mongoose.model('Account' , accountSchema)

module.exports = Account