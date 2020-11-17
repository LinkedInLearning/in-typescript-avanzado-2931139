import * as _ from 'lodash';
import * as content from '../assets/content.json';
import { Quote } from '../interfaces/quote.interface';

/** Get a random quote from a base JSON file */
export default function getARandomQuote(): Quote {
  const randomNumber = _.random(0, content.quotes.length);
  // console.log(`Selección ${randomNumber}`);
  const quote: Quote = content.quotes[randomNumber];
  return quote;
}

/** Get all quotes from a base JSON file */
export function getAllQuotes(): Quote[] {
  return content.quotes;
}
