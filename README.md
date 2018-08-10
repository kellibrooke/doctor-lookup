# Doctor Lookup

#### Epicodus JavaScript code review, Week 2, August 10, 2018

#### By Kelli McCloskey

## This app uses the Better Doctor API to display doctor information based on different search queries.

## Specs

* A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
* A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
* If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
* If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
* If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

## Setup on OSX

* Install Node.js
* Install karma-cli globally: `npm install -g karma-cli`
* Clone the repo
* `npm install` to install dependencies
* `npm run start` to build and start the dev server
* `npm run lint` to explicitly run ESLint
* `npm run test` to run the unit tests with Karma and Jasmine. Visit `localhost:9876` to view the tests.

## Technologies Used

* JavaScript
* Node.js
* jQuery 3.3.1
* Bootstrap 4.1.3
* Babel
* Webpack
* ESLint
* Jasmine
* Karma

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Kelli McCloskey**
