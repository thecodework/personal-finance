var mongoose = require('mongoose')
var Expense = require('./../models/Expense')(mongoose)


exports.postExpense = function(request, response) {
    Expense({
        expense: request.body.expense,
        typeOfExpense : request.body.typeOfExpense,
        categoryOfExpense : request.body.categoryOfExpense,
        totalExpense : request.body.totalExpense,
        contents :request.body.contents
    }).save()
    response.end()
}

exports.getExpenses = function(request, response){
    Expense.find({}, function(err, expenses) {
        response.send(expenses)
    })
}

exports.getExpense =  function(request, response){
    Expense.findById(request.params.id, function(err, expense){
        response.send(expense)
    })
}

exports.updateExpense =  function(request, response){
    Expense.findOne({_id: request.body.id},function(err, data){
        data.expense = request.body.expense
        data.typeOfExpense = request.body.typeOfExpense
        data.categoryOfExpense = request.body.categoryOfExpense
        data.totalExpense = request.body.totalExpense
        data.contents =request.body.contents
        data.save()
    })
    response.end()
}

exports.deleteExpense =  function(request, response){
    Expense.remove({_id: request.params.id},function(err, data){

    })
    response.end()
}


