import $ from 'jquery';
import { Joke, Quote } from 'yfx-in-modules/dist/interfaces';
import { getAllQuotes } from 'yfx-in-modules/dist/utils/quotes';
import './init';
import { picker } from './init';
export class Main {
  constructor() {
    const resultJoke = picker('joke') as Joke;
    this.displayJoke(resultJoke);
    this.diplayQuotes();
  }

  displayJoke(joke: Joke) {
    $('.content').text(joke.body);
    $('.source').text(joke.category);
  }

  diplayQuotes() {
    const quotes: Quote[] = getAllQuotes();
    quotes.forEach((quote: Quote, index: number) => {
      console.log(quote);
      $('.quotes').append(
        `<div>
            <blockquote><strong>${index + 1}:</strong> ${
          quote.quote
        }</blockquote>
            <em>${quote.author}</em>
        </div>`
      );
    });
  }
}
