module.exports = function(app, router, passport, mongoose) {

    var bodyParser = require("body-parser")
    var CategoryController = require('./../controllers/CategoryController')(mongoose)
    var AccountController = require('./../controllers/AccountController')(mongoose)
    var ExpenseController = require('./../controllers/ExpenseController')(mongoose)
    var UserController = require('./../controllers/UserController')(mongoose)
    require('./../config/passport')(passport, mongoose)
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(passport.initialize())

    router.get('/', function(req, res) {
        res.sendFile(__dirname + './../public/index.html')
    })

    router.get('/dashboard', passport.authenticate('jwt', { session: false }), function(req, res) {
      res.send('It worked! User id is: ' + req.user._id + '.')
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

