var Sails = require('sails');
var supertest = require('supertest');

var app;

before((done) => {
  Sails.lift({
    // configuration for testing purposes
    log: {
      //level: 'silly'
      level: 'silent'
    },
    hooks: {
      grunt: false,
    },
  }, (err, sails) => {
    app = sails;
    done(err, sails);
  });
});

describe('bitcoin price page', () => {

  describe('#login()', () => {
    it('should access to homepage /', (done) => {
      supertest(sails.hooks.http.app)
        .get('/')
        .expect(200,done);
    });
  });

});


// After Function
after(() => {
  console.log('lower');
  app.lower({}, (err) => {
    if (err) {
      log.error('An error occurred while shutting the server down.');
    }
    process.exit();
  });
});
