//This schema is to calculate total expenses
module.exports = function(mongoose){

var expense = new mongoose.Schema({
  expense : Number,
  typeOfExpense : String,
  categoryOfExpense : String,
  contents : String,
  totalExpense :  Number,
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now }
})

return mongoose.model('Expense' , expense);
}