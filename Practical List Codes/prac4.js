function calculate_factorial(num) {
  let result;
  function fact_recr(n) {
    let inner_result;
    if (n == 0 || n == 1) {
      inner_result = 1;
    } else {
      inner_result = n * fact_recr(n - 1);
    }
    return inner_result;
  }
  result = fact_recr(num);
  return result;
}

let num = 5;
const fact = calculate_factorial(num);
console.log(`Factorial of ${num} is ${fact}`);
