const fs = require('fs-extra');

async function input(inputFile) {
    const content = await fs.readFile(inputFile);
    return obtainInput(content.toString());
}

async function output(outputFile, model) {
    return await fs.writeFile(outputFile, model);
}

function obtainCases(line) {
    const cases = line.split(' ');
    return {
        R: parseInt(cases[0]),
        C: parseInt(cases[1]),
        F: parseInt(cases[2]),
        N: parseInt(cases[3]),
        B: parseInt(cases[4]),
        T: parseInt(cases[5])
    }    
}

function obtainInput(content) {
    const lines = content.split('\n');
    const tripsLines = lines.slice(1,-1);
    const model = Object.assign({}, obtainCases(lines[0]));
    const trips = [];
    for(let i = 0; i < tripsLines.length; i++) {
        const tripLine = tripsLines[i].split(' ');
        const trip = {};
        trip.index = i;
        trip.start = {x: parseInt(tripLine[0]), y: parseInt(tripLine[1])};
        trip.end = {x: parseInt(tripLine[2]), y: parseInt(tripLine[3])};
        trip.early = parseInt(tripLine[4]);
        trip.finish = parseInt(tripLine[5]);
        trips.push(trip);
    }
    model.trips = trips;
    return model;
}

function obtainSolution(model){
    let outputModel = model.S+'\n';
    for(let i = 0; i < model.S; i++) {
        for(let j = 0; j <= 3; j++) {
            outputModel+=model.cuts[i][j] + ' ';
        }
        outputModel+='\n';
    }
    return outputModel;
}

module.exports = {
    inputLoader: input,
    prepareOutput: output
}