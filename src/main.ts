import { CustomUser, StringValidator } from './interfaces/Validation';
import { LettersOnlyValidator } from './validators/LettersOnlyValidator';
import { ZipCodeValidator } from './validators/ZipCodeValidator';

// Some samples to try
let strings = ['Hello', '98052', '101'];

// Validators to use
let validators: { [s: string]: StringValidator } = {};
validators['ZIP code'] = new ZipCodeValidator();
validators['Letters only'] = new LettersOnlyValidator();

// Show whether each string passed each validator
strings.forEach((s) => {
  for (let name in validators) {
    console.log(
      `"${s}" - ${
        validators[name].isAcceptable(s) ? 'matches' : 'does not match'
      } ${name}`
    );
  }
});

console.log('Hola mundo');

const user: CustomUser;
