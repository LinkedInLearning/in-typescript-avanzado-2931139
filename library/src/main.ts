import * as fact from './content';
import { Calculator } from './utils/calc';
import getQuote, { getAllQuotes } from './utils/quotes';

// console.log('Hola Mundo');

/** Generate a fact! Just pass the one that you need as a parameter!
 * Possible facts:
 *  * Quote
 *  * All Quotes
 *  * Joke
 *  * Riddle
 */
export function makeA(topic: string): unknown {
  switch (topic.toLowerCase()) {
    case 'quote':
      return getQuote();
    case 'all-quotes':
      return getAllQuotes();
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

// console.log(factResult);

// Calculator section
const calc = new Calculator();
const sumResult = calc.sum(1, 2, 3, 4, 5, 6);
const diffResult = calc.diff(1, 2, 3, 4, 5, 6);

// console.log(`+ Total de la suma es ${sumResult}`);
// console.log(`- Total de la resta es ${diffResult}`);
