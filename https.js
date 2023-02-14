// const { send, read } = require('./internals/index.js');

const { send } = require('./request');
const { read } = require('./response'); 

function makeRequest(url, data) {
  send(url, data);
  return read();
} 

console.log(makeRequest('https://google.com', 'hello'));

// console.log(require);