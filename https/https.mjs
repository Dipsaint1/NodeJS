import { send } from './request.mjs';
import { read } from './response.mjs';

// const { send } = require('./request.mjs');
// const { read } = require('./response.mjs');

function makeRequest(url, data) {
  send(url, data);
  return read();
} 

const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);  