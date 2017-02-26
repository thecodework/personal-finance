process.env.NODE_ENV = 'test';
let mongoose = require('mongoose')
mongoose.Promise = require('q').Promise
if (!global.Promise) {
  var q = require('q');
  chai.request.addPromises(q.Promise);
}
let Account = require('./../models/Accounts')
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('./../server');
let should = chai.should();
chai.use(chaiHttp)
describe('**** Account ****', () => {
    beforeEach((done) => { //Before each test we empty the database
        Account.remove({}, (err) => {
            done();
        })
    })
    describe('GET - /account', () => {
        it('it should GET all the accounts', (done) => {
            chai.request(app).get('/api/account').end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
        });
    });

    describe('POST - /account', () => {
        it('it should create a account', (done) => {
            let account = {
                name: 'Transport',
                initialBalance: 1000
            }
            chai.request(app).post('/api/account')
                .send(account)
                .then((res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    done()
            }).catch(function (err) {
                 throw err;
            })
        })
    });

    describe('GET - /account/:id', () => {
        it('it should get a account by id', (done) => {
            let account = new Account({
                name: 'Transport',
                initialBalance: 1000
            })
            account.save((err, account) => {
                chai.request(app)
                    .get('/api/account/' + account.id)
                    .send(account)
                    .then((res)=> {
                    res.should.have.status(200);
                    res.body.should.be.a('object')
                    res.body.should.have.property('name')
                    res.body.should.have.property('initialBalance')
                    res.body.should.have.property('_id').eql(account.id)
                    done()
                }).catch((err) => {
                    throw err
                })
            })
        })
    });

    describe('PATCH - /account/:id', () => {
        it('it should update a account', (done) => {
            let account = new Account({
                name: 'Transports',
                initialBalance: 1000
            })
            account.save((err, account) => {
                chai.request(app)
                    .patch('/api/account/')
                    .send({id: account.id, name: 'Transport', initialBalance: 5000})
                    .end((err, res) => {
                        res.should.have.status(200)
                        res.body.should.be.a('object')
                        res.body.should.have.property('initialBalance', 5000)
                        done()
                })
            })
        })
    })

    describe('DELETE - /account/:id', () => {
        it('it should delete a account by id', (done) => {
            let account = new Account({
                name: 'Transport',
                type: 'expense'
            })
            account.save((err, account) => {
                chai.request(app)
                    .delete('/api/account/' + account.id)
                    .send(account)
                    .end((err, res)=> {
                        res.should.have.status(200);
                        res.body.should.be.a('object')
                        done()
                })
            })
        })
    });
})