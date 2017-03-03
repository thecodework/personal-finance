var mongoose = require('mongoose')
var Account = require('./../models/Accounts')(mongoose)

exports.postAccount = function(request, response) {
    Account({
        name: request.body.accountName,
        initialBalance: request.body.initialBalance
    }).save()
    response.end()
}
