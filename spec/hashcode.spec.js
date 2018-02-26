const fs = require('fs-extra'),
    path = require('path'),
    hashcode = require('../src/');
    expect = require('chai').expect;

describe('Hashcode', function() {
    it('Example input', function(done) {
        hashcode(path.resolve(path.join(__dirname, './fixtures/example.in')), path.resolve(path.join(__dirname, './.tmp/example.out')));
        done();
    })
});
