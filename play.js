const { connect } = require('./client');
const stdin = process.stdin;

console.log('Connecting ...');

let connection = connect();

//connection.send("Name:BIN");

connection.on('connect', () => {
  connection.write('Name: BIN');
  //stdin.on('data', data => {
  //  connection.write(`${data}`);
  //});
});

