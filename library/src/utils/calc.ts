function Logger(message: string) {
  console.log(`Mensaje: ${message}`);

  return function (target: any) {
    console.log(`Clase decorada: ${target}`);
    console.log(target);
  };
}

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

  /** Substract any quantity of values */
  diff(...values: number[]): number {
    return values.reduce((previous, current) => {
      return previous - current;
    });
  }
}
