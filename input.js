let connection;

const handleUserInput = function(key) {
  //if CTRL+C, bye bye snakey otherwise
  //tell the server where snakey should go...
  switch (key) {
  case '\u0003':
    console.log('See ya Snakey');
    process.exit();
    break;
  case 'w':
    connection.write("Move: up");
    break;
  case 'a':
    connection.write("Move: left");
    break;
  case 's':
    connection.write("Move: down");
    break;
  case 'p':
    connection.write("Move: right");
    break;
  case 'l':
    connection.write("Say: watch me go");
    break;
  case 'm':
    connection.write("Say: Woo Hoo");
    break;
  case 'n':
    connection.write("Say: Uh Oh");
    break;
  case 'b':
    connection.write("Say: Are we there yet?");
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