const io = require('./io-loader');

async function hashcode(inputFile, outputFile) {
    const model = await io.inputLoader(inputFile);
    const resolvedModel = await obtainSolution(model);
    io.prepareOutput(outputFile, resolvedModel);
}

async function obtainSolution(model){
    const mock = {};
    mock.S = '3';
    mock.cuts = [['0','0','2','1'],['0','2','2','2'],['0','3','2','4']];
    return mock;
}

module.exports = hashcode;