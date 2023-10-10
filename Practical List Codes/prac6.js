Array.prototype.sum = function () {
  let total = 0;
  for (let i = 0; i < this.length; i++) {
    if (typeof this[i] === "number") {
      total += this[i];
    }
  }
  return total;
};

const numbers = [1, 2, 3, 4, 5];
const result = numbers.sum();
console.log(result);
