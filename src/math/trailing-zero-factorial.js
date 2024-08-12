// Problem Description: We are given a number. The task is to find the Number of Trailing Zeros in the factorial of the number.

// The Trailing Zeros are the Zeros, which appear at the end of a number(factorial in that case)

function findFactorial(number) {
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

function countZeros(number) {
  let zeros = 0;
  while (number % 10 === 0) {
    number = number / 10;
    zeros++;
  }
  return zeros;
}

function findTrailingZeroFactorial(number) {
  return countZeros(findFactorial(number));
}

const result = findTrailingZeroFactorial(100);

console.log(result);
