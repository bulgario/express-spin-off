import chai from 'chai';
import chaiHttp from 'chai-http';
import api from '../src/api/main.js'
import Hello from '../src/api/services/hello.js';

const should = chai.should(); // eslint-disable-line no-unused-vars

chai.use(chaiHttp);

// Add global test actions
describe('Hello', () => {
  // Add your before(), after(), beforeEach() or afterEach() here
});

/*
 * Test the /GET hello route
 */
describe('/GET hello', () => {
  it('should GET hello to all', done => {
    chai.request(api)
      .get('/v1/hello')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('array');
        res.body.length.should.be.eql(1);
        done();
      });
  });
});

describe('Hello Service', () => {
  it('should return hello to all', done => {
    const helloToAll = Hello.hello();
    helloToAll.should.be.an('array');
    helloToAll.length.should.be.eql(1);
    done();
  });
});
