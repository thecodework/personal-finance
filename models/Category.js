module.exports = function(mongoose){

var categorySchema = new mongoose.Schema({
  name: {type: String , required: true},
  type: String
})

return mongoose.model('Category' , categorySchema)
}