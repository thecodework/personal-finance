//This schema is to calculate total expenses


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var expense = new schema({
  email: String,
  expense : Number,
  typeOfExpense : String,
  categoryOfExpense : String,
  dateOfExpense : Number,
  contents : String,
  totalExpense :  Number
})




var Expense = mongoose.model('Expense' , expense);


module.exports = Expense;