
module.exports = function('mongoose'){

var userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

return mongoose.model('User' , userSchema);

}