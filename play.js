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