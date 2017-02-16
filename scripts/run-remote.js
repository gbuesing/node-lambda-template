#!/usr/bin/env node
var AWS = require('aws-sdk')
  , config = require('../lambda-config')
  , payload = require('../event-samples/test.js')

// Taken from https://github.com/ThoughtWorksStudios/node-aws-lambda/blob/master/index.js#L12
if ("profile" in config) {
  var credentials = new AWS.SharedIniFileCredentials({profile: config.profile});
  AWS.config.credentials = credentials;
}

var lambda = new AWS.Lambda({
  region: config.region,
  accessKeyId: "accessKeyId" in config ? config.accessKeyId : "",
  secretAccessKey: "secretAccessKey" in config ? config.secretAccessKey : "",
  sessionToken: "sessionToken" in config ? config.sessionToken : ""
})

lambda.invoke({
  FunctionName: config.functionName,
  Payload: JSON.stringify(payload),
  LogType: 'Tail'
}, function(err, data) {
  if (err) {
    console.log(err, err.stack); // an error occurred
  } else {
    var logResult = Buffer.from(data.LogResult, 'base64').toString('utf8')
    console.log(logResult)
    console.log(data.Payload)
  }
})
