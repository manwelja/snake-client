const {connect} = require('./client');
const {setupInput} = require('./input');

console.log("Connecting ...");

const client = connect();

//Create a snake!
client.on('connect', () => {
  client.write("Name: JAM");
  //setup stdin
  setupInput(client);
});


