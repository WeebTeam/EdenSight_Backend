# EdenSight-backend

## Tested with
* Ubuntu 20.04.3
* Node 14.18.0
* MongoDB 3.6.8

## Running the server
* Ensure you have NodeJS and npm installed
* clone this repo
* run `npm install`
* connect on `<host_ip>:3000`

## Available commands for the server.

* Run the server in development mode: `npm run start:dev`
* Run all unit-tests: `npm test`
* Run a single unit-test: `npm test --testFile="name of test file"` (i.e. --testFile=Users).
* Check for linting errors: `npm run lint`
* Build the project for production: `npm run build`
* Run the production build: `npm start`
* Run production build with a different env file `npm start --env="name of env file"` (default is production).

Generated with [express-generator-typescript](https://github.com/seanpmaxwell/express-generator-typescript/)
