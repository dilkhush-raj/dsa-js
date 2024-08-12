// Find factorial of a number

function factorial(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(5));

// Using recursion

function recursiveFactorail(number) {
  if (number == 0) return 1;
  return number * factorial(n - 1);
}

console.log(factorial(4));
