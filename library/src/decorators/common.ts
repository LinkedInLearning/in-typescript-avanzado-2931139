export function Logger(message: string) {
  //   console.log(`Mensaje: ${message}`);

  return function (target: any) {
    // console.log(`Clase decorada: ${target}`);
    // console.log(target);
  };
}

export function connect() {
  console.log('Decorador CONNECT --> evaluado');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('Decorador CONNECT  --> invocado');
  };
}

export function counter() {
  console.log('Decorador COUNTER --> evaluado');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('Decorador COUNTER  --> invocado');
  };
}

export function test() {
  console.log('Decorador TEST --> evaluado');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('Decorador TEST  --> invocado');
  };
}
