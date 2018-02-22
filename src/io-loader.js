// @flow
function input(inputFile: string) {
    const lines = inputFile.split('\n');
    return {
        cases: obtainCases(lines[0]),
        pizza: obtainPizza(lines.slice(1,-1))
    }
}

function output(model: {}) {
    return model;
}

function obtainCases(line: string) {
    const cases = line.split(' ');
    return {
        R: parseInt(cases[0]),
        C: parseInt(cases[1]),
        L: parseInt(cases[2]),
        H: parseInt(cases[3]),
    }    
}

function obtainPizza(lines: string[]) {
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