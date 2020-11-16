import * as fact from './content';
import { Fact } from './interfaces/common.types';
import { Calculator } from './utils/calc';

// console.log('Hola Mundo');

/** Generate a fact! Just pass the one that you need as a parameter!
 * Possible facts:
 *  * Quote
 *  * All Quotes
 *  * Joke
 *  * Riddle
 */
export function makeA(topic: string): Fact {
  switch (topic.toLowerCase()) {
    case 'quote':
      return fact.quote;
    case 'all-quote':
      return fact.quote;
    case 'joke':
      return fact.joke;
    case 'hardJoke':
      return fact.hardJoke;
    case 'riddle':
      return fact.riddle;

    default:
      return 'No existe la opción seleccionada';
  }
}

const factResult = makeA('quote');

console.log(factResult);

// Calculator section
const calc = new Calculator();
const sumResult = calc.sum(1, 2, 3, 4, 5, 6);
const diffResult = calc.diff(1, 2, 3, 4, 5, 6);

// console.log(`+ Total de la suma es ${sumResult}`);
// console.log(`- Total de la resta es ${diffResult}`);
