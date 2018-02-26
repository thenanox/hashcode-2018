const fs = require('fs-extra');

async function input(inputFile) {
    const content = await fs.readFile(inputFile);
    return obtainPizza(content.toString());
}

async function output(outputFile, model) {
    const outputModel = obtainSolution(model);
    return await fs.writeFile(outputFile, outputModel);
}

function obtainCases(line) {
    const cases = line.split(' ');
    return {
        R: parseInt(cases[0]),
        C: parseInt(cases[1]),
        L: parseInt(cases[2]),
        H: parseInt(cases[3]),
    }    
}

function obtainPizza(content) {
    const lines = content.split('\n');
    const pizzaLines = lines.slice(1,-1);
    const model = Object.assign({}, obtainCases(lines[0]));
    const pizza = [];
    for(let i = 0; i < pizzaLines.length; i++) {
        const pizzaRow = [];
        for(let j = 0; j < pizzaLines[i].length; j++) {
            pizzaRow.push(pizzaLines[i][j]);
        }
        pizza.push(pizzaRow);
    }
    model.pizza = pizza;
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