var mongoose = require('mongoose')
var Expense = require('./../models/Expense')(mongoose)

exports.postExpense = function(request, response) {
    Expense({
        expense: response.body.expense,
        typeOfExpense : response.body.typeOfExpense,
        categoryOfExpense : response.body.categoryOfExpense,
        totalExpense : response.body.totalExpense,
        contents :response.body.contents
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
        data.expense= response.body.expense
        data.typeOfExpense = response.body.typeOfExpense
        data.categoryOfExpense = response.body.categoryOfExpense
        data.totalExpense = response.body.totalExpense
        data.contents =response.body.contents
        data.save()
    })
    response.end()
}

exports.deleteExpense =  function(request, response){
    Expense.remove({_id: request.params.id},function(err, data){

    })
    response.end()
}


