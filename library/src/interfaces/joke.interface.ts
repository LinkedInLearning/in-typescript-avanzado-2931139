/** Interface for a simple Joke */
export interface Joke<T> {
  body: T;
  category: T;
  [key: string]: T;
}

// /** Interface for a complicated Joke */
// export interface ComplicatedJoke extends Joke {
//   level: number;
// }

const joke: Joke<number> = {
  body: 2,
  category: 2,
  nombre: 2,
  tile: 2,
};

function random<T, U>(value: T, description: U): T {
  const result: T = value;
  console.log(`Value ${value},  description ${description}`);
  return result;
}

const answer = random<boolean, string>(true, 'hola');
