exports.handler = function(event, context, callback) {
  var name = event.name || 'World'
  var greeting = exports.getGreetingPrefix() + name
  callback(null, {greeting: greeting})
}

// export so we can stub in tests
exports.getGreetingPrefix = function() {
  return "Hello, "
}
