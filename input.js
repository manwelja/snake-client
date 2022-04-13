const handleUserInput = function(key) {
  //if CTRL+C, bye bye snakey
  if (key === '\u0003') {
    console.log('cya');
    process.exit();
  }
};

//Set up interface to handle user input from stdin
const setupInput = function() {
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

//setupInput();

module.exports = {setupInput};