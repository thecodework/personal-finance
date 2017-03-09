module.exports = function(app, router) {

    var bodyParser = require("body-parser")
    var CategoryController = require('./../controllers/CategoryController')
    var AccountController = require('./../controllers/AccountController')
    var ExpenseController = require('./../controllers/ExpenseController')
    var UserController = require('./../controllers/UserController')

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



    router.route('/expenses')
        .get(ExpenseController.getExpenses)

    router.route('/expense')
        .post(ExpenseController.postExpense)
        .patch(ExpenseController.updateExpense)

    router.route('/expense/:id')
        .get(ExpenseController.getExpense)
        .delete(ExpenseController.deleteExpense)

    router.route('/authenticate')
        .post(UserController.authenticate)
    router.route('/register')
        .post(UserController.register)

    app.use('/api',router)
}

