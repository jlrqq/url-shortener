const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
// const sqlite3 = require('sqlite3').verbose();
// process.env.NODE_ENV = 'test';

chai.use(chaiHttp);
chai.should();


// describe('Shorten URL API', () => {

//   // Test the POST /shorten route
//   describe('POST /shorten', () => {
//     it('should generate a short code for a given URL', (done) => {
//       const longUrl = 'http://www.example.com';

//       chai.request(app)
//         .post('/shorten')
//         .send({ url: longUrl })
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           res.body.should.have.property('shortUrl').include('cutlink.com');
//           res.body.should.have.property('shortCode').be.a('string');
//           done();
//         });
//     });
//   });

//   // Test the GET /:shortCode route
//   describe('GET /:shortCode', () => {
//     it('should redirect to the original URL for a valid short code', (done) => {
//       const shortCode = 'abc123';

//       chai.request(app)
//         .get(`/${shortCode}`)
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           res.body.should.have.property('longUrl').be.a('string');
//           done();
//         });
//     });

//     it('should return a 404 error for an invalid short code', (done) => {
//       const shortCode = 'invalid';

//       chai.request(app)
//         .get(`/${shortCode}`)
//         .end((err, res) => {
//           res.should.have.status(404);
//           done();
//         });
//     });
//   });

// });