// Main function to calculate factorial
function calculateFactorial(number) {
  let result;

  function factorialRecursive(n) {
    let intermediateResult;

    if (n === 0 || n === 1) {
      intermediateResult = 1;
    } else {
      intermediateResult = n * factorialRecursive(n - 1);
    }

    console.log(`Intermediate result for n=${n}: ${intermediateResult}`);

    return intermediateResult;
  }

  result = factorialRecursive(number);

  return result;
}

const numberToCalculate = 5;
const factorialResult = calculateFactorial(numberToCalculate);
console.log(`Factorial of ${numberToCalculate} is: ${factorialResult}`);
