//This schema is to calculate total balance avilable 


var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var total = new Schema({
  totalBalance : Number,
  email : String
})



var Total = mongoose.model('Total' , total)

module.exports = Total;