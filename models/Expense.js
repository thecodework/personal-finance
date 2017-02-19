//This schema is to calculate total expenses


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var expense = new schema({
  user: {type: Schema.ObjectId, ref: 'User'},
  expense : Number,
  typeOfExpense : String,
  categoryOfExpense : {type: Schema.ObjectId, ref: 'Category' },
  contents : String,
  totalExpense :  Number,
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now }
})




var Expense = mongoose.model('Expense' , expense);


module.exports = Expense;