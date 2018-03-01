#!/usr/bin/env node

const hashcode = require('../src'),
      path = require('path');

const args = require('yargs')
  .usage(`rides [args]`)
  .example('Basic usage', `rides -i example.in`)
  .example('Basic usage with output file', `rides -i example.in -o example.out`)
  .alias('i', 'input')
  .describe('i', 'path to input file to ridesgorithm')
  .require('i', 'is mandatory an input file to process')
  .alias('o', 'output')
  .describe('o', 'destination file to generate solved rides. Default value is rides.out')
  .default('o', 'rides.out')
  .help()
  .argv;

hashcode(path.resolve(args.input), path.resolve(args.output));
