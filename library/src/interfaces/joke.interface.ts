/** Interface for a simple Joke */
export interface Joke {
  body: string;
  category: string;
  [key: string]: string;
}

// /** Interface for a complicated Joke */
// export interface ComplicatedJoke extends Joke {
//   level: number;
// }

const joke: Joke = {
  body: 'Esta es una broma',
  category: 'Broma simple',
  nombre: 'joker',
  tile: 'joker',
};
