const Calculator = require("./calculator.js");

const calc = new Calculator();


console.log(calc.preIncrement(5));

console.log(calc.postIncrement(5));

console.log(calc.preDecrement(6));

console.log(calc.postDecrement(6));

console.log(calc.add(5, 6));

console.log(calc.subtract(5, 6));

console.log(calc.divide(5, 6));

console.log(calc.multiply(5, 6));
