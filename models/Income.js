//This schema is to calculate total incomes

module.exports = function('mongoose'){

var income = new mongoose.Schema({
  user: {type: Schema.ObjectId, ref: 'User'},
  income : Number,
  typeOfIncome : String,
  categoryOfIncome : {type: Schema.ObjectId, ref: 'Category' },
  contents : String,
  totalIncome : Number,
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now }
})


return mongoose.model('Income' , income)

}