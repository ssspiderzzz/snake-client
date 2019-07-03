const net = require('net');
/**
     * Establishes connection with the game server
     */


const connect = function() {
  const conn = net.createConnection({
    host: '192.168.88.218',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('connected!');
  });

  return conn;
};

module.exports = { connect };