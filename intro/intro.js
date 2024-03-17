"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = 'hello world';
console.log(greetings);
function myHero(name, greetings) {
    if (name === void 0) { name = 'hello'; }
    return name + greetings;
}
console.log(myHero(greetings));
