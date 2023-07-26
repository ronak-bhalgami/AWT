// 1. let & Const keywork: 
let x = 10;
x = 20; // Valid with 'let'
const y = 5;
// y = 8; // Error, cannot reassign 'const' variable

// 2. Arrow funtion : 
const add = (a, b) => a + b;

// 3. The (Spread Of) ... Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// 4. for/of Loop :
const numbers = [1, 2, 3];
for (const num of numbers) {
  console.log(num);
}

// 5. Map Object:
const map = new Map();
map.set("name", "John");
map.set("age", 30);
console.log(map.get("name")); // "John"

// 6. Set Object:
const set = new Set([1, 2, 2, 3, 4, 4]);
console.log(set); // Set { 1, 2, 3, 4 }

// 7. Calsses:
class Person {
    constructor(name) {
      this.name = name;
    }
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  const person = new Person("John");
  person.sayHello(); // "Hello, my name is John"

// 8. Promises:
const fetchData = () => {
    return new Promise((resolve, reject) => {
      // Asynchronous operation
      if (dataFetchedSuccessfully) {
        resolve(data);
      } else {
        reject(error);
      }
    });
  };
  fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

// 9. Symbol:
const mySymbol = Symbol("mySymbol");
const obj = {
  [mySymbol]: "Hello",
};

// 10. Default Parame
const greet = (name = "Guest") => {
    console.log(`Hello, ${name}`);
  };
  greet(); // "Hello, Guest"
  greet("John"); // "Hello, John"

// 11. Function Rest Parameter:
const sum = (...numbers) => {
    return numbers.reduce((acc, num) => acc + num, 0);
  };
  console.log(sum(1, 2, 3, 4)); // 10
  