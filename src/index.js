const io = require('./io-loader');

function hashcode(inputFile, outputFile) {
    const model = io.inputLoader(inputFile).then(function(data){
        const resolvedModel = obtainSolution(data.toString());
        return io.prepareOutput(outputFile, resolvedModel);
    });
}

function obtainSolution(model){
    //Fill with algorithm
    return model;
}

module.exports = hashcode;