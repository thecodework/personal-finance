const express = require('express')
const app = express()
const router = express.Router();

let config= require('./config/config')

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/frontend'))


require('./routes/api')(app, router )

var mongoose = require('mongoose')

var bodyParser = require('body-parser');  
var morgan = require('morgan');  
var passport = require('passport'); 
//var config =require('./config/main');
var User = require('./app/models/user');     
var jwt = require('jsonwebtoken'); 
var port=8000; 

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());

// Log requests to console
app.use(morgan('dev'));  
app.use(passport.initialize());  

//mongoose.connect(config.test); 

require('./config/passport')(passport);  

// Create API group routes
var apiRoutes = express.Router();  

// Register new users
apiRoutes.post('/register', function(req, res) {  
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
        return res.json({ success: false, message: 'That email address already exists.'});
      }
      res.json({ success: true, message: 'Successfully created new user.' });
    });
  }
});

apiRoutes.post('/authenticate', function(req, res) {  
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.send({ success: false, message: 'Authentication failed. User not found.' });
    } else {
      // Check if password matches
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch && !err) {
          // Create token if the password matched and no error was thrown
          var token = jwt.sign(user, config.secret, {
            expiresIn: 10080 // in seconds
          });
          res.json({ success: true, token: 'JWT ' + token });
        } else {
          res.send({ success: false, message: 'Authentication failed. Passwords did not match.' });
        }
      });
    }
  });
});

// Protect dashboard route with JWT
apiRoutes.get('/dashboard', passport.authenticate('jwt', { session: false }), function(req, res) {  
  res.send('It worked! User id is: ' + req.user._id + '.');
});

// Set url for API group routes
app.use('/api', apiRoutes);  


// Home route. We'll end up changing this to our main front end index later.
app.get('/home', function(req, res) {  
  res.send('Relax. We will put the home page here later.');
});

//mongoose.connect(config.mongoURI[app.settings.env])

app.listen(8000, function(){
  console.log('listening on 8000')
})
module.exports = app
