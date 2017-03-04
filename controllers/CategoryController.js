
var mongoose = require('mongoose')
var Category = require('./../models/Category')(mongoose)

exports.postCategory = function(request, response) {
    Category({
        name: request.body.categoryName,
        type: request.body.categoryType
    }).save()
    response.end()
}

exports.getCategories = function(request, response){
    Category.find({}, function(err, categories) {
        response.send(categories)
    })
}

exports.getCategory =  function(request, response){
    Category.findById(request.params.id, function(err, category){
        response.send(category)
    })
}


exports.updateCategory =  function(request, response){//to update
    Category.findOne({_id: request.body.id},function(err, data){
        data.name = request.body.categoryName
        data.type= request.body.categoryType
        data.save()
    })
    response.end()
}

exports.deleteCategory =  function(request, response){
    Category.remove({_id: request.params.id},function(err, data){

    })
    response.end()
}


