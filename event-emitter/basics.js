

const { EventEmitter } = require('events');
const fileSystem = require('fs');
const path = require('path');

class DirectoryReader extends EventEmitter {
  constructor (directory) {
    super();
    this.directory = directory;
    this.on('error', err => {
      console.log('==============EventName:error===============');
      console.log('Reading error:', err);
    });
    
    this.on('data', (fileName, content) => {
      console.log('==============EventName:data===============');
      console.log(`Data recieved.\nFileName:${fileName}\nContents:${content}`);
    });
    
    this.once('data', (fileName, content) => {
      console.log('==============EventName:data(once)===============');
      console.log(`Data recieved once.\nFileName:${fileName}\nContents:${content}`);
    });
    
    this.on('end', () => {
      console.log('==============EventName:end===============');
      console.log('Reading completed.');
    });
  }
  read () {
    fileSystem.readdir(this.directory, (err, files) => {
      if (err) {
        return this.emit('error', err);
      }
      files.forEach(file => {
        const content = fileSystem.readFileSync(path.join(this.directory, file), 'utf-8');
        this.emit('data', file, content);
      });
      this.emit('end');
    });
  }
}

const myDirectoryReader = new DirectoryReader(`${__dirname}/folder/`);

myDirectoryReader.read();
// ==============EventName:data===============
// Data recieved.
// FileName:test.txt
// Contents:🙋 < Oh, hi.
// ==============EventName:data(once)===============
// Data recieved once.
// FileName:test.txt
// Contents:🙋 < Oh, hi.
// ==============EventName:end===============
// Reading completed.


