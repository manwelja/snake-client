const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, KEY_MESSAGES } = require("./constants");
let connection;

const handleUserInput = function(key) {
  //if CTRL+C, bye bye snakey otherwise
  //tell the server where snakey should go...
  switch (key) {
  case '\u0003':
    console.log('See ya Snakey');
    process.exit();
    break;
  case MOVE_UP_KEY:
    connection.write("Move: up");
    break;
  case MOVE_LEFT_KEY:
    connection.write("Move: left");
    break;
  case MOVE_DOWN_KEY:
    connection.write("Move: down");
    break;
  case MOVE_RIGHT_KEY:
    connection.write("Move: right");
    break;
  case 'l':
    connection.write("Say: " + KEY_MESSAGES.l);
    break;
  case 'm':
    connection.write("Say: " + KEY_MESSAGES.m);
    break;
  case 'n':
    connection.write("Say" + KEY_MESSAGES.n);
    break;
  case 'b':
    connection.write("Say: " + KEY_MESSAGES.b);
    break;
  default:
    break;
  }
};

//Set up interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  //when input received, call handleUserInput and pass in key press
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
};

module.exports = {setupInput};