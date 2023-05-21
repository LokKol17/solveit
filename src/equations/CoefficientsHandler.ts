export default class CoefficientsHandler {


    public static extractCoefficients (terms: Array<string>): Array<Array<number>> {
        const coefficients: Array<Array<number>> = [[], [], []];

        terms.forEach((term) => {
            if (term === undefined) {
                return;
            }

            if (term.includes('x2')) {
                coefficients[0].push(this.processCoefficient(term, 0));
                return;
            }

            if (term.includes('x')) {
                coefficients[1].push(this.processCoefficient(term, 1));
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

    private static processCoefficient(term: string, coefficientIndex: number): number {
        let newTerm: string | number = '';

        if (coefficientIndex === 0) {
            newTerm = term.replace('x2', '');
        } else if (coefficientIndex === 1) {
            newTerm = term.replace('x', '');
        }

        if (isNaN(Number(newTerm)) || Number(newTerm === '')) {
            newTerm = 1;
        }

        return Number(newTerm);
    }
}