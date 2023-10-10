// class InfiniteNumberIterator {
//   constructor() {
//     this.current = 0;
//   }

//   next() {
//     return { value: this.current++, done: false };
//   }
// }

// const infiniteNumbers = new InfiniteNumberIterator();

// // Example usage of the iterator:
// for (let i = 0; i < 5; i++) {
//   console.log(infiniteNumbers.next().value);
// }

function* evenNumberGenerator() {
  let num = 0;
  while (true) {
    yield num;
    num += 2;
  }
}

const evenNumbers = evenNumberGenerator();

// Example usage of the generator:
for (let i = 0; i < 5; i++) {
  console.log(evenNumbers.next().value);
}
