/*
const stdin = process.stdin;

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};

let handleUserInput = function() {
  setupInput();
  console.log(setupInput());
};

connection.on('connect', () => {
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', (key) => {
    if (key === 'w') {
      console.log('up');
      setInterval(() => {connection.write("Move: up");}, 500);
    }
    if (key === 's') {
      console.log('down');
      setInterval(() => {connection.write("Move: down");}, 500);
    }
    if (key === 'a') {
      console.log('left');
      setInterval(() => {connection.write("Move: left");}, 500);
    }
    if (key === 'd') {
      console.log('right');
      setInterval(() => {connection.write("Move: right");}, 500);
    }
    if (key === '\u0003') {
      console.log("Thanks for using me, ciao!");
      process.exit();
    }
  });
});
handleUserInput();
*/