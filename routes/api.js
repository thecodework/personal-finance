module.exports = function(app, router) {
    
    var bodyParser = require("body-parser")
    var CategoryController = require('./../controllers/CategoryController')
    var AccountController = require('./../controllers/AccountController')

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

    router.route('/accounts')
        .get(AccountController.getAccounts)
    
    router.route('/account')
        .post(AccountController.postAccount)
        .patch(AccountController.updateAccount) 
    
    router.route('/account/:id')
        .get(AccountController.getAccount)
        .delete(AccountController.deleteAccount)      

    app.use('/api',router)
}

