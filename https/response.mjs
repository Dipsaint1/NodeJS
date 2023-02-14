function decrypt(data) {
  return 'decrypted data';
}

function read() {
  return decrypt('data');
}

// To use 'require'
// module.exports = {
//   read
// }
export{
  read
}