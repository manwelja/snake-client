const {connect} = require('./client');

console.log("Connecting ...");

const client = connect();

//Create a snake!
client.on('connect', () => {
  client.write("Name: JAM");
});
