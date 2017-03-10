let config= require('./../config/config')
var jwt = require('jsonwebtoken')
module.exports = function(mongoose){
    let User = require('../models/User')(mongoose)

    /**
     * Authenticate the user using given email and password.
     * If authenticated returns "JWT access token"
     */
    this.authenticate = function(req, res) {
      User.findOne({
        email: req.body.email
      }, function(err, userData) {
        if (err) throw err

        if (! userData) {
          res.send({ success: false, message: 'Authentication failed. User not found.' })
        } else {
          // Check if password matches
          userData.comparePassword(req.body.password, function(err, isMatch) {
            if (isMatch && !err) {
              // Create token if the password matched and no error was thrown
              var token = jwt.sign(userData, config.secret, {
                expiresIn: 10080 // in seconds
              })
              res.json({ success: true, token: 'JWT ' + token })
            } else {
              res.send({ success: false, message: 'Authentication failed. Passwords did not match.' })
            }
          })
        }
      })
    }

    /**
     * Register a user using email and password.
     *
     */
    this.register =  function(req, res) {
      if(!req.body.email || !req.body.password) {
        res.json({ success: false, message: 'Please enter email and password.' })
      } else {
        var newUser = new User({
          email: req.body.email,
          password: req.body.password
        })
        // Attempt to save the user
        newUser.save(function(err) {
          if (err) {
            return res.json({ success: false, message: 'That email address already exists.'})
          }
          res.json({ success: true, message: 'Successfully created new user.' })
        })
      }
    }
    return this
}