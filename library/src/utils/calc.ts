import { connect, counter, Logger, test } from './../decorators/common';

/** Calculator with basic operations */
@Logger('Hola mundo')
export class Calculator {
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
