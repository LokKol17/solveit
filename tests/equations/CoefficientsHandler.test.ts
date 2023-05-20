import CoefficientsHandler from "../../src/equations/CoefficientsHandler";

test('Teste da extração de quocientes', () => {
    const equation1 = ['x2', '-4x', '+4', '=0'];
    const equation2 = ['2x2', '+5x', '-3', '=0'];
    expect(JSON.stringify(CoefficientsHandler.extractCoefficients(equation1))).toEqual(JSON.stringify([[1], [-4], [4, 0]]));
    expect(JSON.stringify(CoefficientsHandler.extractCoefficients(equation2))).toEqual(JSON.stringify([[2], [5], [-3, 0]]));
});

test('Teste da soma de quoeficientes', () => {
    const coefficients = [[1], [-4], [4, 0]];
    expect(CoefficientsHandler.sumCoefficients(coefficients)).toEqual([1, -4, 4]);
});