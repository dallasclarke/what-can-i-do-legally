
const whatCanIdoLegally = require('./back-end.js');

// Get the users input.
const age = getInput(0);

// get a message based on that age from the back end.
const message = whatCanIdoLegally(age);

// prints it out for the user.
console.log(message);


function getInput(i) {
  return process.argv[i + 2];
}
