// Check number is Palindrome Number or not

// A palindrome number is a number that remains the same when its digits are reversed. For example, 121 and 1331 are palindrome numbers.

function isPalindrome(number) {
  let numStr = number.toString();
  let reverseNumber = numStr.split("").reverse().join("");
  return numStr === reverseNumber;
}

console.log(isPalindrome(404));
console.log(isPalindrome(443));
