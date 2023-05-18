import EquationInterface from "@/equations/EquationInterface";

import Fraction from "fraction.js";

export default class QuadraticEquation implements EquationInterface{

    private equation: string
    constructor(equation: string) {
        this.equation = equation;
    }

    public execute(): Array<string | number> | string {
        const formattedEquation = this.prepareQuadraticEquation(this.equation);
        console.log(formattedEquation);
        const preparedEquation = this.prepareEquation(formattedEquation);
        console.log(preparedEquation);
        const solvedEquation = this.solveEquation(preparedEquation[0], preparedEquation[1], preparedEquation[2]);
        console.log(solvedEquation);
        return solvedEquation;
    }

    private prepareQuadraticEquation (equation: string) {
        //prepara o termo x2 para ser usado
        equation = equation.replace(/\s/g, '');
        equation = equation.replace(/(x2|x²|xe2|xe²|x\^2|x\^²)/gi, 'x2');
        equation = equation.replace(/(-x2)/gi, '-1x2');

        return equation;
    }

    private prepareEquation (equationString: string) {
        //remove espaços em branco e separa cada termo para um array
        const equation = equationString.replace(/\s/g, '');
        const regex = /([-+]?\d*x\d*)|([-+=]?[-+]?\d+)/g;
        const terms = equation.match(regex);

        //cria os arrays dos coeficientes
        const a: Array<number> = [];
        const b: Array<number> = [];
        const c: Array<number> = [];

        if (terms === null) {
            throw new Error('Invalid equation');
        }

        //coloca cada termo em seu respectivo array
        terms.forEach(function (term) {
            //TODO: refatorar isso
            if (term === undefined) {
                return;
            }
            if (term.includes('x2')) {
                let newTerm: string|number = term.replace('x2', '')
                if (isNaN(Number(newTerm)) || Number(newTerm == '')) {
                    newTerm = 1;
                }
                a.push(Number(newTerm));
                return;
            }
            if (term.includes('x')) {
                let newTerm:string|number = term.replace('x', '')
                if (isNaN(Number(newTerm)) || Number(newTerm == '')) {
                    newTerm = 1;
                }
                b.push(Number(newTerm));
                return;
            }
            if (term.includes('=')) {
                term = term.replace('=+', '-');
                term = term.replace('=-', '+');
                term = term.replace('=', '-')

                c.push(Number(term));
                return;
            }
            c.push(Number(term))
        });

        //soma os itens do array
        const coefficientA = a.reduce((current, next) => current + next, 0);
        const coefficientB = b.reduce((current, next) => current + next, 0);
        const coefficientC = c.reduce((current, next) => current + next, 0);

        return [coefficientA, coefficientB, coefficientC];
    }

    private solveEquation(a:number, b:number, c:number) {
        //TODO: realiza a verificação para checar se a raiz é real
        const discriminant = b * b - 4 * a * c;

        if (discriminant > 0) {
            const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            return [new Fraction(x1).toFraction(), new Fraction(x2).toFraction()];
        } else if (discriminant === 0) {
            const x = -b / (2 * a);
            return [new Fraction(x).toFraction()];
        } else {
            return []; // Nenhuma raiz real
        }
    }



}

