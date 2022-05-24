# User Manager

## Introduction

The application manages users stored in a mongo database, written in Typescript with express framework.
All actions are executed through REST calls.

## Endpoints

| Method | Path         | Description                           | Request                | Response  | Authorization |
| ------ | ------------ | ------------------------------------- | ---------------------- | --------- | ------------- |
| POST   | /auth/signup | create a single user                  | user                   | user id   | N/A           |
| POST   | /auth/login  | verify the user and send back a token | email and password     | jwt token | N/A           |
| GET    | /users/all   | return all the users                  | N/A                    | user list | Bearer token  |
| GET    | /users/me    | return the user making the call       | N/A                    | user      | Bearer token  |
| PATCH  | /users/:id   | modify the specific user              | user id and user       | user id   | Bearer token  |
| DELETE | /users/:id   | delete the specific user              | user id                | N/A       | Bearer token  |

## Configuration

The configuration must be place in .env file

* `PORT` the port of the server
* `MONGODB_URI` connection string of Mongo database
* `SECRET` secret to sign the jwt token

## Modules

* `@types/express` type definitions for Express
* `nodemon` replacement wrapper for node.js to restart the application when file changes
* `ts-node` TypeScript's execution and REPL for node.js
* `bcrypt` to hash passwords
* `body-parser` node.js parsing middleware
* `cors` middleware to enable CORS
* `dotenv` to load environment variables from a .env file into process.env
* `express` web framework for node.js
* `jsonwebtoken`  implementation of JSON Web Tokens.
* `mongoose` it provides a straight-forward, schema-based solution to work with Mongo database