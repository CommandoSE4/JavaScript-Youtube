const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 6, 8, 0, -2));
// console.log(Math.max(4, 6, 8, 0, -9));

console.log(Math.random());     //can give 0 but never 1
console.log(Math.floor(Math.random()*10) + 1);

min = 10
max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // *11 = <11