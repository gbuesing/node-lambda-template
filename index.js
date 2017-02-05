exports.handler = function(event, context, callback) {
  var name = event.name || 'World';
  var greeting = "Hello, " + name;
  callback(null, {greeting: greeting});
}
