// import { ComplicatedJoke as HardJoke, Joke } from './interfaces/joke.interface';
// import { Quote } from './interfaces/quote.interface';
// import { Riddle } from './interfaces/riddle.interface';

import { ComplicatedJoke as HardJoke, Joke, Quote, Riddle } from './interfaces';

export const quote: Quote = {
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  author: '@yacaFx',
};

export const joke: Joke = {
  body:
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  category: 'Chiste simple',
};

export const hardJoke: HardJoke = {
  body:
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  category: 'Chiste simple',
  level: 3,
};

export const riddle: Riddle = {
  riddle:
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
  answer: 'Busca en loremipsum generator',
};
