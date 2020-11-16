import * as content from '../assets/content.json';
import { Quote } from '../interfaces/quote.interface';
import { quote } from './../content';

/** Get a random quote from a base JSON file */
export default function getARandomQuote(): Quote {
  return quote;
}

/** Get all quotes from a base JSON file */
export function getAllQuotes(): Quote[] {
  return content.quotes;
}
