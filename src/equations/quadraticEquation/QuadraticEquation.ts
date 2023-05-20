import EquationInterface from "@/equations/EquationInterface";

import Fraction from "fraction.js";
import CoefficientsHandler from "../CoefficientsHandler";

export default class QuadraticEquation implements EquationInterface{

    private equation: string
    constructor(equation: string) {
        this.equation = equation;
    }

    public execute(): Array<string | number> | string {
        const formattedEquation = this.prepareQuadraticEquation(this.equation);
        const preparedEquation = this.prepareEquation(formattedEquation);
        return this.solveEquation(preparedEquation[0], preparedEquation[1], preparedEquation[2]);
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

        if (terms === null) {
            throw new Error('Invalid equation');
        }

        const coefficientsArray: Array<Array<number>> = CoefficientsHandler.extractCoefficients(terms);

        return CoefficientsHandler.sumCoefficients(coefficientsArray);
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

