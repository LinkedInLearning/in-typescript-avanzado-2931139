"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LettersOnlyValidator_1 = require("./validators/LettersOnlyValidator");
var ZipCodeValidator_1 = require("./validators/ZipCodeValidator");
// Some samples to try
var strings = ['Hello', '98052', '101'];
// Validators to use
var validators = {};
validators['ZIP code'] = new ZipCodeValidator_1.ZipCodeValidator();
validators['Letters only'] = new LettersOnlyValidator_1.LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(function (s) {
    for (var name_1 in validators) {
        console.log("\"" + s + "\" - " + (validators[name_1].isAcceptable(s) ? 'matches' : 'does not match') + " " + name_1);
    }
});
console.log('Hola mundo');
var user = {
    name: 'Sergio',
};
