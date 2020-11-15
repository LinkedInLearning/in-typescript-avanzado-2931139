/** Interface for a simple Joke */
interface Joke {
  body: string;
  category: string;
}

/** Interface for a complicated Joke */
interface ComplicatedJoke extends Joke {
  level: number;
}
