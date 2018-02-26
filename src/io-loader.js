const fs = require('fs-extra');

async function input(inputFile) {
    return await fs.readFile(inputFile);
}

async function output(outputFile, model) {
    return await fs.writeFile(outputFile, model);
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

function obtainPizza(lines) {
    const pizza = [];
    for(let i = 0; i < lines.length; i++) {
        const pizzaRow = [];
        for(let j = 0; j < lines[i].length; j++) {
            pizzaRow.push(lines[i][j]);
        }
        pizza.push(pizzaRow);
    }
    return pizza;
}

module.exports = {
    inputLoader: input,
    prepareOutput: output
}