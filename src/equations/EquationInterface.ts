export default interface EquationInterface {
    execute(equation: string): Array<string|number>|string;
}