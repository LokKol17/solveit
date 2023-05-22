import QuadraticEquation from "../../src/equations/quadraticEquation/QuadraticEquation";


test('Teste da equação quadrática em que o discriminante é zero', () => {
    const equation = 'x2 -4x +4 =0';
    expect((new QuadraticEquation(equation)).execute()).toEqual(["2"])
});

test('Teste da equação quadrática em que o discriminante é um inteiro real', () => {
    const equation = '2x^2 + 5x - 3 = 0';
    expect((new QuadraticEquation(equation)).execute()).toEqual(["1/2", "-3"])
});

test('Teste da equação quadrática contem apenas o coeficiente a', () => {
    const equation = '-7x2 = 0';
    expect((new QuadraticEquation(equation)).execute()).toEqual(["0"])
});
test('Teste da equação quadrática contem apenas os coeficiente a, b', () => {
    const equation = '3x^2 + 6x = 0';
    expect((new QuadraticEquation(equation)).execute()).toEqual(["0", "-2"])
});
test('Teste da equação quadrática contem apenas os coeficiente a, c', () => {
    const equation = 'x^2 - 9 = 0';
    expect((new QuadraticEquation(equation)).execute()).toEqual(["3", "-3"])
});

