# Test for NodeJs in G-Cloud App Engine

The porpuse of App Engine is to build web apps and backends easily with the next benefits:

- Google handles de Server an OS, you only care about the app
- It scales automatically
- It has load balancers, versioning, testing, authentication, mailing and more ready to use.

There are two versions:

1. Standard (2008) - has free version available
2. Flexible - requires one instance minimum always active

Look for more info in **[App Engine Environments](https://cloud.google.com/appengine/docs/the-appengine-environments)**

## Setup

Before you can run or deploy the sample, you need to do the following:

1.  Install dependencies:

    npm install

## Running locally

    npm start

## Deploying to App Engine

    gcloud app deploy
