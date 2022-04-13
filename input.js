let connection;

const handleUserInput = function(key) {
  //if CTRL+C, bye bye snakey
  if (key === '\u0003') {
    console.log('See ya Snakey');
    process.exit();
  } else if (key === 'w') {
    //Tell the server where snakey should go...
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'p') {
    connection.write("Move: right");
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