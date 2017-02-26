process.env.NODE_ENV = 'test';
let mongoose = require('mongoose')
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
        it('it should create category', (done) => {
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
})