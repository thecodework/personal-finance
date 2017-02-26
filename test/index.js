process.env.NODE_ENV = 'test';
let Category = require('./../models/Category')
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('./../server');
let should = chai.should();
chai.use(chaiHttp)

describe('Index Page', () => {
    describe('/GET /', () => {
        it('it should open the index page', (done) => {
            chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200)
                done()
            })
        })
    })
})