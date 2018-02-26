#!/usr/bin/env node

const hashcode = require('../src'),
      path = require('path');

const args = require('yargs')
  .usage(`pizza [args]`)
  .example('Basic usage', `pizza -i example.in`)
  .example('Basic usage with output file', `pizza -i example.in -o example.out`)
  .alias('i', 'input')
  .describe('i', 'path to input file to pizzagorithm')
  .require('i', 'is mandatory an input file to process')
  .alias('o', 'output')
  .describe('o', 'destination file to generate solved pizza. Default value is pizza.out')
  .default('o', 'pizza.out')
  .help()
  .argv;

hashcode(path.resolve(args.input), path.resolve(args.output));
