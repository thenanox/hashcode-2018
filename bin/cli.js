#!/usr/bin/env node

const hashcode = require('../src'),
      path = require('path'),
      zipFolder = require('zip-folder');

const args = require('yargs')
  .usage(`rides [args]`)
  .example('Basic usage', `rides -i example.in`)
  .example('Basic usage with output file', `rides -i example.in -o example.out`)
  .example('Generate all output files', `rides -a`)
  .alias('i', 'input')
  .describe('i', 'path to input file to ridesgorithm')
  .alias('o', 'output')
  .describe('o', 'destination file to generate solved rides. Default value is rides.out')
  .alias('a', 'all')  
  .describe('all', 'flag to generate all outs')
  .default('all', false)
  .help()
  .argv;

if(args.all) {
  hashcode(path.resolve('in/a_example.in'), path.resolve('out/a_example.out'));
  console.log('a_example.in finished!')
  hashcode(path.resolve('in/b_should_be_easy.in'), path.resolve('out/b_should_be_easy.out'));
  console.log('b_should_be_easy.in finished!')  
  hashcode(path.resolve('in/c_no_hurry.in'), path.resolve('out/c_no_hurry.out'));
  console.log('c_no_hurry.in finished!')  
  hashcode(path.resolve('in/d_metropolis.in'), path.resolve('out/d_metropolis.out'));
  console.log('d_metropolis.in finished!')  
  hashcode(path.resolve('in/e_high_bonus.in'), path.resolve('out/e_high_bonus.out'));
  console.log('e_high_bonus.in finished!')  
  zipFolder(path.resolve(path.join(__dirname, '../hashcode-2018')), path.resolve('out/hashcode.zip'), function(err) {
    if(err) {
        console.log('Error zipping code!', err);
    } else {
        console.log('Come on pussy!');
    }
  });
} else {
  hashcode(path.resolve(args.input), path.resolve(args.output));
}
