const { send, read } = require('./internals/index.js');

function makeRequest(url, data) {
  send(url, data);
  return read();
} 

console.log(makeRequest('https://google.com', 'hello'));

// console.log(require);