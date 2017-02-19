//This schema is to calculate total incomes 



var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var income = new schema({
  email: String,
  income : Number,
  typeOfIncome : String,
  categoryOfIncome : String,
  dateOfIncome : Number,
  contents : String,
  totalIncome : Number 
})


var Income = mongoose.model('Income' , income)

module.exports = Income;