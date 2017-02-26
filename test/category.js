process.env.NODE_ENV = 'test';
let mongoose = require('mongoose')
mongoose.Promise = global.Promise;
let Category = require('./../models/Category')
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('./../server');
let should = chai.should();
chai.use(chaiHttp)
describe('Category', () => {
    beforeEach((done) => { //Before each test we empty the database
        Category.remove({}, (err) => {
            done();
        })
    })
    describe('/GET /api/category', () => {
        it('it should GET all the categories', (done) => {
            chai.request(app).get('/api/category').end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
        });
    });

    describe('/POST /api/category', () => {
        it('it should create a category', (done) => {
            let category = {
                name: 'Transport',
                type: 'expense'
            }
            chai.request(app).post('/api/category')
                .send(category)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                done()
            })
        })
    });

    describe('/GET/:id /api/category', () => {
        it('it should get a category by id', (done) => {
            let category = new Category({
                name: 'Transport',
                type: 'expense'
            })
            category.save((err, category) => {
                chai.request(app)
                    .get('/api/category/' + category.id)
                    .send(category)
                    .end((err, res)=> {

                    res.should.have.status(200);
                    res.body.should.be.a('object')
                    res.body.should.have.property('name')
                    res.body.should.have.property('type')
                    res.body.should.have.property('_id').eql(category.id)

                    done()
                })
            })
        })
    });

    describe('/PATCH/:id /api/category', () => {
        it('it should update a category', (done) => {
            let category = new Category({
                name: 'Transports',
                type: 'income'
            })
            category.save((err, category) => {
                chai.request(app)
                    .patch('/api/category/')
                    .send({id: category.id, name: 'Transport', type: 'expense'})
                    .end((err, res) => {
                        res.should.have.status(200)
                        res.body.should.be.a('object')
                        done()
                })
            })
        })
    })

    describe('/DELETE/:id /api/category', () => {
        it('it should delete a category by id', (done) => {
            let category = new Category({
                name: 'Transport',
                type: 'expense'
            })
            category.save((err, category) => {
                chai.request(app)
                    .delete('/api/category/' + category.id)
                    .send(category)
                    .end((err, res)=> {
                    res.should.have.status(200);
                    res.body.should.be.a('object')
                    done()
                })
            })
        })
    });
})