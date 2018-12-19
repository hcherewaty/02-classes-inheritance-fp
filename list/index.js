'use strict';

const List = require('./list-constructor.js');

let stuff = new List();
// console.log(stuff);
stuff.push('a');
stuff.push('b');
// console.log(stuff);
let last = stuff.pop();
// console.log(stuff);
// console.log(last);
let shiftLast = stuff.shift();
// console.log(shiftLast);
let unshiftStuff = stuff.unshift();
console.log(unshiftStuff);



