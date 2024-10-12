// Check the given number is odd or even

function oddOrEven(num) {
  return num % 2 !== 0 ? "Odd" : "Even";
}

const num = 11;
const resultOfOddOrEven = oddOrEven(num);
console.log(resultOfOddOrEven);
