const io = require('./io-loader');

async function hashcode(inputFile, outputFile) {
    const model = await io.inputLoader(inputFile);
    const resolvedModel = await obtainSolution(model.toString());
    io.prepareOutput(outputFile, resolvedModel);
}

async function obtainSolution(model){
    //Fill with algorithm
    return model;
}

module.exports = hashcode;