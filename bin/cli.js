#!/usr/bin/env node

const hashcode = require('../lib'),
      fs = require('fs');

require('yargs')
.usage('$0 <cmd> [args]')
.command('pizza [file]', 'Hashcode Pizza 2018 baby!', (yargs) => {
  yargs.positional('file', {
    type: 'string',
    describe: 'Default input file'
  })
}, function (argv) {
  console.log('Loading input file... ' + argv.file);
  fs.readFile(argv.file, (error,data) => {
    if(error) {
      console.error('Error loading file ', error);
    } else {
      console.log(hashcode(data.toString()));
    } 
  })
})
.help()
.argv;


