function* tryCounter() {
  let index = 0;
  while (index < 4) {
    yield index++;
  }
}

let secureTry = tryCounter();

console.log(secureTry.next());
console.log(secureTry.next());
console.log(secureTry.throw('Error en el api'));
console.log(secureTry.next());
console.log(secureTry.return());
console.log(secureTry.next());
console.log(secureTry.next());
