var assert      = require('assert')
  , lambdaLocal = require('lambda-local')
  , winston     = require('winston')
  , sinon       = require('sinon')
  , helloWorld  = require('../index.js')


winston.level = 'warn'
lambdaLocal.setLogger(winston)


describe('helloWorld', function() {
  describe('with name supplied in event', function() {
    var error, result

    before(function(done) {
      sinon.stub(helloWorld, 'getGreetingPrefix').returns('Bonjour, ')

      lambdaLocal.execute({
        event       : {name: "Test"},
        lambdaFunc  : helloWorld,
        callback    : function(_error, _result) {
          error = _error
          result = _result
          done()
        }
      })
    })

    after(function() {
      helloWorld.getGreetingPrefix.restore()
    })

    it('should return custom greeting', function() {
      assert.equal("Bonjour, Test", result.greeting)
      assert.equal(null, error)
    })
  })
})
