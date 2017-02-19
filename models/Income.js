//This schema is to calculate total incomes



var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var income = new schema({
  user: {type: Schema.ObjectId, ref: 'User'},
  income : Number,
  typeOfIncome : String,
  categoryOfIncome : {type: Schema.ObjectId, ref: 'Category' },
  contents : String,
  totalIncome : Number,
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now }
})


var Income = mongoose.model('Income' , income)

module.exports = Income;