exports.handler = function(event, context, callback) {
  const name = event.name || 'World'
  const greeting = exports.getGreetingPrefix() + name
  callback(null, {greeting: greeting})
}

// export so we can stub in tests
exports.getGreetingPrefix = function() {
  return "Hello, "
}
