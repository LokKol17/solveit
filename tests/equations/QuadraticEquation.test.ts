import QuadraticEquation from "../../src/equations/quadraticEquation/QuadraticEquation";


test('Teste da equação quadrática em que o discriminante é zero', () => {
    const equation = 'x2 -4x +4 =0';
    expect((new QuadraticEquation(equation)).execute()).toEqual(["2"])
});

test('Teste da equação quadrática em que o discriminante é um inteiro real', () => {
    const equation = '2x^2 + 5x - 3 = 0';
    expect((new QuadraticEquation(equation)).execute()).toEqual(["1/2", "-3"])
});