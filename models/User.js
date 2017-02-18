var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  Name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword : {type : String, required : true},
  dateOfBirth : Date
  
});

userSchema.methods.dudify = function() {
  // add some stuff to the users name
  this.name = this.name + '-dude';

  return this.name;
}

var expense = new schema({
  email: String,
  expense : Number,
  typeOfExpense : String,
  categoryOfExpense : String,
  dateOfExpense : Number,
  contents : String,
  totalExpense :  Number
})

var income = new schema({
  email: String,
  income : Number,
  typeOfIncome : String,
  categoryOfIncome : String,
  dateOfIncome : Number,
  contents : String,
  totalIncome : Number 
})

var total new Schema({
  totalBalance : Number,
  email : String
})
// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User' , userSchema);
var Expense mongoose.model('Expense' , expense);
var Income = mongoose.model('Income' , income)
var Total = mongoose.model('Total' , total)


// make this available to our users in our Node applications
module.exports = User;
