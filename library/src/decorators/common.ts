export function Logger(message: string) {
  //  console.log(`Mensaje: ${message}`);

  return function (target: any) {
    // console.log(`Clase decorada: ${target}`);
    // console.log(target);
  };
}

export function connect() {
  // console.log('Decorador CONNECT --> evaluado');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // console.log('Decorador CONNECT  --> invocado');
  };
}

export function counter() {
  // console.log('Decorador COUNTER --> evaluado');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // console.log('Decorador COUNTER  --> invocado');
  };
}

export function test() {
  // console.log('Decorador TEST --> evaluado');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // console.log('Decorador TEST  --> invocado');
  };
}

export function init<T extends { new (...args: any[]): {} }>(constructor: T) {
  // console.log(constructor);
  return class extends constructor {
    total = 10;
    description = 'nueva propiedad';
  };
}

export function frozen(constructor: Function) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

export function confirm(status: boolean) {
  return function (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    // console.log(descriptor.value);
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      if (status) {
        // console.log(this, args);
        const result = original.apply(this, args);
        return result;
      } else {
        return 0;
      }
    };
  };
}

export function prefix(label: string) {
  return function (target: any, key: string) {
    let val = target[key];

    const getter = () => {
      return val;
    };

    const setter = (next: string) => {
      //  console.log('actualizando valor...');
      val = ` ${label} ${next}`;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}
