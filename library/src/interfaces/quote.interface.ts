/** Interface for a simple Quote */
export interface Quote {
  quote: string;
  author: string;
  [key: string]: string;
}

type QuoteKey = keyof Quote;

type quoteType = Quote['quote'];
type authorType = Quote['author'];

function getPropertyValue<T, U extends keyof T>(obj: T, propertyName: U): T[U] {
  return obj[propertyName];
}

const quote: Quote = {
  author: 'yacafx',
  quote: 'Happy Coding',
  date: new Date().toString(),
};

const quoteContent = getPropertyValue(quote, 'quote');
const authorContent = getPropertyValue(quote, 'author');

function getProperties<T, U extends keyof T>(obj: T, props: U[]): T[U][] {
  return props.map((name) => obj[name]);
}

getProperties(quote, ['quote', 'author', 'date']);
