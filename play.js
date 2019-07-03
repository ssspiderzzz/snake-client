const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');

let connection = connect();
setupInput(connection);

connection.on('connect', () => {
  connection.write('Name: BIN');
});

connection.on('connect', () => {
  connection.write('Say: LetsPlay A Gaaaaaame...');
});