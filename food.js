const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
for (let i = 0; i < 40; ++i) {
  connect();
}
let connection = connect();
setupInput(connection);



