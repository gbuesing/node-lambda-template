module.exports = {
  // specify profile if key+secret in ~/.aws/credentials (created by aws-cli)
  profile: "default",
  // if aws-cli not installed, you can just directly provide accessKeyId: and secretAccessKey:
  // accessKeyId: "", 
  // secretAccessKey: "",
  region: 'us-east-1',
  handler: 'index.handler',
  // REQUIRED create role with AWSLambdaBasicExecutionRole policy in Amazon Console > IAM > Roles
  // identifier will look something like: arn:aws:iam::123456789012:role/myRole
  role: "REQUIRED",
  functionName: "helloWorld",
  timeout: 10,
  memorySize: 128,
  publish: true,
  runtime: 'nodejs4.3',
}
