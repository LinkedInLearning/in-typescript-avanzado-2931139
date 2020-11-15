/** Fact types per kind of content */
import { Joke } from './joke.interface';
import { Quote } from './quote.interface';
import { Riddle } from './riddle.interface';

/** Fact types per kind of content */
export type Fact = Quote | Quote[] | Joke | Riddle | string;
