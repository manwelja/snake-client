const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // change to IP address of computer or ngrok host if tunneling
    port:  50541// or change to the ngrok port if tunneling
  });
  
  conn.setEncoding('utf8'); // interpret data as text

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = {connect};