var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

userSchema.methods.dudify = function() {
  // add some stuff to the users name
  this.name = this.name + '-dude';

  return this.name;
}





//he schema is useless so far
// we need to create a model using it
var User = mongoose.model('User' , userSchema);

// make this available to our users in our Node applications
module.exports = User;
