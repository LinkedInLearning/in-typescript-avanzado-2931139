import {
  confirm,
  connect,
  counter,
  frozen,
  init,
  Logger,
  prefix,
  test,
} from './../decorators/common';

/** Calculator with basic operations */
@frozen
@init
@Logger('Hola mundo')
export class Calculator {
  @prefix('→ → →')
  total = 0;
  constructor() {
    // console.log('Calculator has been loaded...');
  }

  @confirm(true)
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

// const result = calc.sum(1, 2, 3);

// console.log(`Resultado: ${result}`);

// console.log(`Total: ${calc.total}`);

// for (let key in calc) {
//   console.log(`Key: ${key}`);
// }

// class Scientific extends Calculator {}
