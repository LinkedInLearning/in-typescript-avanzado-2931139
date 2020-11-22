import {
  connect,
  counter,
  frozen,
  init,
  Logger,
  test,
} from './../decorators/common';

/** Calculator with basic operations */
@frozen
@init
@Logger('Hola mundo')
export class Calculator {
  total = 0;
  constructor() {
    // console.log('Calculator has been loaded...');
  }

  /** Sum any quantity of values */
  sum(...values: number[]): number {
    return values.reduce((previous, current) => {
      return previous + current;
    });
  }

  // (f ∘ g)(x) es equivalente f(g(x)).
  // (connect ∘ counter)(diff) es equivalente connect(counter(diff)).
  @connect()
  @counter()
  @test()
  /** Substract any quantity of values */
  diff(...values: number[]): number {
    return values.reduce((previous, current) => {
      return previous - current;
    });
  }
}

const calc = new Calculator();

// console.log(calc.total);

// for (let key in calc) {
//   console.log(`Key: ${key}`);
// }

class Scientific extends Calculator {}
