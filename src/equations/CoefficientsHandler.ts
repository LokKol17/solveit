export default class CoefficientsHandler {


    public static extractCoefficients (terms: Array<string>): Array<Array<number>> {
        const coefficients: Array<Array<number>> = [[], [], []];

        terms.forEach((term) => {
            if (term === undefined) {
                return;
            }

            if (term.includes('x2')) {
                let newTerm:string|number = term.replace('x2', '');
                if (isNaN(Number(newTerm)) || Number(newTerm == '')) {
                    newTerm = 1;
                }
                coefficients[0].push(Number(newTerm));
                return;
            }

            if (term.includes('x')) {
                let newTerm:string|number = term.replace('x', '');
                if (isNaN(Number(newTerm)) || Number(newTerm == '')) {
                    newTerm = 1;
                }
                coefficients[1].push(Number(newTerm));
                return;
            }

            if (term.includes('=')) {
                term = term.replace('=+', '-');
                term = term.replace('=-', '+');
                term = term.replace('=', '-');

                coefficients[2].push(Number(term));
                return;
            }

            if (!term.includes('x')) {
                coefficients[2].push(Number(term));
                return;
            }
        })

        return coefficients;
    }

    public static sumCoefficients(coefficientsArray: Array<Array<number>>): Array<number> {
        const coefficientsSummed: Array<number> = [];

        for (let i = 0; i < coefficientsArray.length; i++) {
            coefficientsSummed[i] = coefficientsArray[i].reduce((current, next) => current + next, 0);
        }

        return coefficientsSummed;
    }

}