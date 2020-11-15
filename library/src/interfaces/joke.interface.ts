/** Interface for a simple Joke */
export interface Joke {
  body: string;
  category: string;
}

/** Interface for a complicated Joke */
export interface ComplicatedJoke extends Joke {
  level: number;
}
