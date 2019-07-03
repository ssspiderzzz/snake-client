/* eslint-disable brace-style */
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {handleUserInput(key);});
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    console.log('up');
    connection.write("Move: up");
  }
  if (key === 's') {
    console.log('down');
    connection.write("Move: down");
  }
  if (key === 'a') {
    console.log('left');
    connection.write("Move: left");
  }
  if (key === 'd') {
    console.log('right');
    connection.write("Move: right");
  }
};


module.exports = {setupInput};