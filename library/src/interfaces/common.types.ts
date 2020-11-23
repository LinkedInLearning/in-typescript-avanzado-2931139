/** Fact types per kind of content */
import { Quote } from './quote.interface';
import { Riddle } from './riddle.interface';

/** Fact types per kind of content */
// export type Fact = Quote | Quote[] | Joke<string> | Riddle | string;

export type Fact<T> = T;

const quote: Fact<Quote> = {
  author: 'yacafx',
  quote: 'Happy Coding',
};

const riddle: Fact<Riddle> = {
  riddle: 'Agua pasa por mi casa, cate de mi corazón',
  answer: 'aguacate',
};

const riddleArr: Fact<Riddle[]> = [
  {
    riddle: 'Agua pasa por mi casa, cate de mi corazón',
    answer: 'aguacate',
  },
  {
    riddle: 'Agua pasa por mi casa, cate de mi corazón',
    answer: 'aguacate',
  },
  {
    riddle: 'Agua pasa por mi casa, cate de mi corazón',
    answer: 'aguacate',
  },
];

// const riddle: Fact<Joke<string>> = {

// };

// type label = string;

// const name: label;
