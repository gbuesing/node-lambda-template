var assert        = require('assert')
    , lambdaLocal = require('lambda-local');


describe('helloWorld', function() {
  describe('with name supplied in event', function() {
    var done, err;

    before(function(cb) {
      lambdaLocal.execute({
        event: {name: "Test"},
        lambdaPath: './index.js',
        callback: function(_err, _done) {
          err = _err;
          done = _done;
          cb();
        }
      });
    });

    it('should return custom greeting', function() {
      assert.equal("Hello, Test", done.greeting);
    });

  });
});
