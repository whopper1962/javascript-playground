
const EventEmitter = require('events').EventEmitter;

const event = new EventEmitter();

event.on('data', () => {
  console.log(`Recieved data`);
});

console.log('ほげ', event.emit('data'));
