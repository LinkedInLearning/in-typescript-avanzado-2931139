import { Quote } from '../interfaces/quote.interface';
import { quote } from './../content';

/** Get a random quote from a base JSON file */
export default function getARandomQuote(): Quote {
  return quote;
}

/** Get all quotes from a base JSON file */
export function getAllQuotes(): Quote[] {
  const allQuotes: Quote[] = [quote, quote, quote, quote, quote];
  return allQuotes;
}
