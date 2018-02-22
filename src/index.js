// @flow
import { inputLoader, prepareOutput } from './io-loader';
import { obtainSolution } from './solution';

function hashcode(inputFile: string) {
    const model = inputLoader(inputFile);
    const resolvedModel = obtainSolution(model);
    return prepareOutput(resolvedModel);
}

module.exports = hashcode;