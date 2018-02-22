const fs = require('fs'),
    path = require('path'),
    hashcode = require('../lib/');
    expect = require('chai').expect;

describe('Hashcode', function() {
    it('Example input', function(done) {
        fs.readFile(path.join(__dirname, './fixtures/', 'example.in'), (error, data) => {
            if(error) {
                throw new Error(error);
            }
            const solution = hashcode(data.toString());
            expect("3\n0 0 2 1\n0 2 2 2\n0 3 2 4").to.equal(solution);
            done();
        });
    })
    it('Small input', function(done) {
        fs.readFile(path.join(__dirname, './fixtures/', 'small.in'), (error, data) => {
            if(error) {
                throw new Error(error);
            }
            const solution = hashcode(data.toString());
            done();
        });
    })
    it('Medium input', function(done) {
        fs.readFile(path.join(__dirname, './fixtures/', 'medium.in'), (error, data) => {
            if(error) {
                throw new Error(error);
            }
            const solution = hashcode(data.toString());
            done();
        });
    })
    it('Big input', function(done) {
        fs.readFile(path.join(__dirname, './fixtures/', 'big.in'), (error, data) => {
            if(error) {
                throw new Error(error);
            }
            const solution = hashcode(data.toString());
            done();
        });
    })
});
