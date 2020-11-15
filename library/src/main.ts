import { Calculator } from './utils/calc';

console.log('Hola Mundo');

const calc = new Calculator();
const sumResult = calc.sum(1, 2, 3, 4, 5, 6);
const diffResult = calc.diff(1, 2, 3, 4, 5, 6);

console.log(`+ Total de la suma es ${sumResult}`);
console.log(`- Total de la resta es ${diffResult}`);
