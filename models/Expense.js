//This schema is to calculate total expenses


module.exports = function('mongoose'){

var expense = new mongoose.Schema({
  user: {type: Schema.ObjectId, ref: 'User'},
  expense : Number,
  typeOfExpense : String,
  categoryOfExpense : {type: Schema.ObjectId, ref: 'Category' },
  contents : String,
  totalExpense :  Number,
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now }
})

return mongoose.model('Expense' , expense);
}