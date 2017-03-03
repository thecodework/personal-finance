module.exports = function(app, router) {
    var Account = require('./../models/Accounts')
    var bodyParser = require("body-parser")
    var CategoryController = require('./../controllers/CategoryController')
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.get('/', function(req, res) {
        res.sendFile(__dirname + './../public/index.html')
    })

    router.route('/categories')
        .get(CategoryController.getCategories)

    router.route('/category')
        .post(CategoryController.postCategory)
        .patch(CategoryController.updateCategory)

    router.route('/category/:id')
        .get(CategoryController.getCategory)
        .delete(CategoryController.deleteCategory)

    app.use('/api',router)

    app.post('/api/account', function(request, response) {
        Account({
            name: request.body.accountName,
            initialBalance: request.body.initialBalance
        }).save()
        response.end()
    })


    app.get('/api/account', function(request, response){
        Account.find({}, function(err, accounts) {
            response.send(accounts)
        })
    })

    app.get('/api/account/:id', function(request, response){
        Account.findById(request.params.id, function(err, account){
            response.send(account)
        })
    })

// to update the accounts
    app.patch('/api/account', function(request, response){
        Account.findOne({_id: request.body.id},function(err, account){
            account.name = request.body.accountName
            account.initialBalance= request.body.initialBalance
            account.save()
            response.send(account)
        })
        // response.end()
    })

    app.delete('/api/account/:id', function(request, response){
        Account.remove({_id: request.params.id},function(err, account){

        })
        response.end()
    })

}