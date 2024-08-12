// Function to count the number of digits in a number

function CountDigit(number) {
  if (!number) return "Parameter is not provided";
  let count = 0;
  while (number > 0) {
    number = Math.floor(number / 10); // Removing the last digit on each iteration
    count++;
  }
  return count;
}

const number = 382909875492;
const TotalDigits = CountDigit(number);
console.log(number + " has " + TotalDigits + " digits.");
