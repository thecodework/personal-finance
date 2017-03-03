var mongoose = require('mongoose')
var Account = require('./../models/Accounts')(mongoose)

exports.postAccount = function(request, response) {
    Account({
        name: request.body.accountName,
        initialBalance: request.body.initialBalance
    }).save()
    response.end()
}

exports.getAccounts = function(request, response){
    Account.find({}, function(err, accounts) {
        response.send(accounts)
    })
}

exports.getAccount =  function(request, response){
    Account.findById(request.params.id, function(err, account){
        response.send(account)
    })
}

exports.updateAccount =  function(request, response){//to update
    Account.findOne({_id: request.body.id},function(err, data){
        data.name = request.body.accountName
        data.initialBalance= request.body.initialBalance
        data.save()
    })
    response.end()
}

exports.deleteAccount =  function(request, response){
    Account.remove({_id: request.params.id},function(err, data){

    })
    response.end()
}





