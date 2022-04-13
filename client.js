const net = require('net');
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port:  PORT
  });
  
  conn.setEncoding('utf8'); // interpret data as text
  
  //Print message when connection established
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });
  //Print incoming messages form server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = {connect};