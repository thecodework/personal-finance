
module.exports = function('mongoose'){
var bcrypt = require('bcrypt')

var userSchema = new mongoose.Schema({
  email:{
  	type:String,
  	lowercase:true,
  	unique:true,
  	required:true
  },
password:{
	type:String,
	required:true
},
role:{
	type:String,
	enum:['Client','Admin'],
	default:'Client'
} 
});

//save the user's hashed password


userSchema.pre('save' , function(next){
	var user =this
	if(this.isModified('password') || this.isNew){
		bcrypt.genSalt(10, function(err , salt){
			if(err){
				return next(err)
			}
			bcrypt.hash(user.password, salt, function(err , hash){
				if(err){
					return next(err)
				}
				user.password = hash
				next()
			})
		})	
	}else{
		return next()
	}
})


//Create a methos to compare password
userSchema.methods.comparePassword = function(pw , cb){
bcrypt.compare(pw, this.password , function(err , isMatch){
	if(err){
		return cb(err)
	}
	cb(null , isMatch)
})
}





return mongoose.model('User' , userSchema);

}

















