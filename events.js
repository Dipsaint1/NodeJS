const EventEmitter = require('events');
const process = require('process');

const celebrity = new EventEmitter();

// Subscribe to celebrity for Observer 1
celebrity.on('race', function(result) {
  if(result === 'won') console.log('Congratulations! You are the best!')
});

// Subscribe to celebrity for Observer 2
celebrity.on('race', function(result) {
  if(result === 'lost') console.log('Boo, I could have done better than that!')
});

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});

celebrity.emit('race', 'won');
celebrity.emit('race', 'lost');