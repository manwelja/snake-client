const {connect} = require('./client');

console.log("Connecting ...");

const client = connect();

//Create a snake!
client.on('connect', () => {
  client.write("Name: JAM");

  // client.write("Move: up");
  // setTimeout(() => {
  //   client.write("Move: up");
  // }, 50);
  // setInterval(() => {
  //   client.write("Move: up");
  // }, 50);

});

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)

const handleUserInput = function(key) {
  //if CTRL+C, bye bye snakey
  if (key === '\u0003') {
    process.exit();
  }
};

//Set up interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  //when input received, call handleUserInput
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
};

setupInput();
