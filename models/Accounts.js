
module.exports = function(mongoose){

var accountSchema = new mongoose.Schema({
  name: {type: String , required: true},//bank account name
  initialBalance : Number
})

return mongoose.model('Account' , accountSchema)

}