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
  .default('all', 'false')
  .help()
  .argv;

if(args.all) {
  hashcode(path.resolve('fixtures/a_example.in'), path.resolve('fixtures/a_example.out'));
  hashcode(path.resolve('fixtures/b_should_be_easy.in'), path.resolve('fixtures/b_should_be_easy.out'));
  hashcode(path.resolve('fixtures/c_no_hurry.in'), path.resolve('fixtures/c_no_hurry.out'));
  hashcode(path.resolve('fixtures/d_metropolis.in'), path.resolve('fixtures/d_metropolis.out'));
  hashcode(path.resolve('fixtures/e_high_bonus.in'), path.resolve('fixtures/e_high_bonus.out'));
  zipFolder(path.resolve(path.join(__dirname, '../hashcode-2018')), path.resolve('fixtures/hashcode.zip'), function(err) {
    if(err) {
        console.log('Error zipping code!', err);
    } else {
        console.log('Come on pussy!');
    }
  });
} else {
  hashcode(path.resolve(args.input), path.resolve(args.output));
}
