module.exports = function(mongoose){
    let Account = require('./../models/Account')(mongoose)
    this.postAccount = function(request, response) {
        Account({
            name: request.body.accountName,
            initialBalance: request.body.initialBalance
        }).save()
        response.end()
    }
    this.getAccounts = function(request, response) {
        Account.find({}, function(err, accounts) {
            if (err) {
                return err
            }
            response.send(accounts)
        })
    }
    this.getAccount = function(request, response) {
        Account.findById(request.params.id, function(err, account) {
            if (err) {
                return err
            }
            response.send(account)
        })
    }
    this.updateAccount = function(request, response) { //to update
        Account.findOne({
            _id: request.body.id
        }, function(err, data) {
            if (err) {
                return err
            }
            data.name = request.body.accountName
            data.initialBalance = request.body.initialBalance
            data.save()
        })
        response.end()
    }
    this.deleteAccount = function(request, response) {
        Account.remove({
            _id: request.params.id
        }, function(err, data) {
            if (err) {
                return err
            }
        })
        response.end()
    }
    return this
}