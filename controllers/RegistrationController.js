var mongoose = require('mongoose')
var User = require('./../models/User')(mongoose)



// Register new users
exports.postRegistration= function(req, res) {  
  if(!req.body.email || !req.body.password) {
    res.json({ success: false, message: 'Please enter email and password.' });
  } else {
    var newUser = new User({
      email: req.body.email,
      password: req.body.password
    });

    // Attempt to save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({ success: false, message: 'That email address already exists.'})
      }
      res.json({ success: true, message: 'Successfully created new user.' })
    })
  }
}




exports.postAuthentication =function(req, res) {  
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.send({ success: false, message: 'Authentication failed. User not found.' })
    } else {
      // Check if password matches
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch && !err) {
          // Create token if the password matched and no error was thrown
          var token = jwt.sign(user, config.secret, {
            expiresIn: 10080 // in seconds
          });
          res.json({ success: true, token: 'JWT ' + token })
        } else {
          res.send({ success: false, message: 'Authentication failed. Passwords did not match.' })
        }
      })
    }
  })
}


//Protect dashboard route with JWT
  exports.getDashboard= function(){ passport.authenticate('jwt', { session: false }), function(req, res) {  
    res.send('It worked! User id is: ' + req.user._id + '.')
  }
}


// // Protect dashboard route with JWT
// exports.getDashboard= function( passport.authenticate('jwt', { session: false }), function(req, res) {  
//   res.send('It worked! User id is: ' + req.user._id + '.');
