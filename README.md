node-lambda-template
===

A minimal template for creating AWS Lambda functions that run on Node.js. Includes scripts for running locally, unit testing and deploying.

This project pulls together [Gulp](http://gulpjs.com/), [Mocha](https://mochajs.org/), [node-aws-lambda](https://github.com/ThoughtWorksStudios/node-aws-lambda) and [lambda-local](https://github.com/ashiina/lambda-local) to create a simple toolchain for development and deployment.


Initial AWS setup
---

If you haven't already, create an AWS account at https://aws.amazon.com/

Create an IAM user with Administrator Access and put the credentials in ```~/.aws/credentials```. If you already installed and configured the [AWS Command Line Interface](https://aws.amazon.com/cli/), it did this for you. If not, the file should look like:

```
[default]
aws_secret_access_key = ABC123
aws_access_key_id = ABC123
```

You'll also need to create a role for your lambda, with ```AWSLambdaBasicExecutionRole``` policy attached. You can do this in AWS Console > IAM > Roles.

Put the ARN for this role in ```lambda-config.js```. The ARN should look something like: ```arn:aws:iam::123456789012:role/myRole```


Setup for development
---

```
git clone https://github.com/gbuesing/node-lambda-template.git
cd node-lambda-template
npm install
```


Running locally
---

```
npm run local
```

This will run the lambda on your local machine, filling the event object with values in event-samples/test.js. This allows you to test/debug the lambda code before deploying.

Script is configured in package.json scripts/run-local. 
See [lambda-local](https://github.com/ashiina/lambda-local) for configuration options.


Running unit tests
---

```
npm test
```

Uses [Mocha](https://mochajs.org/) test framework.


Deploy to AWS
---

```
gulp deploy
```

Deploy task uses values in ```lambda-config.js```. For details, see [node-aws-lambda](https://github.com/ThoughtWorksStudios/node-aws-lambda)


Invoking deployed lambda via aws-cli
---

```
aws lambda invoke --function-name helloWorld --payload '{"name": "Foo"}' /dev/stdout
```
