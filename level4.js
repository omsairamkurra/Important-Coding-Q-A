// Programs using Recursion

// Factorial using recursive function
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const num = 5;
console.log(`Factorial of ${num} is: ${factorial(num)}`);

// Fibonacci using recursive function
function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibonacciNum = 6;
console.log(`Fibonacci of ${fibonacciNum} is: ${fibonacci(fibonacciNum)}`);

//  Sum of N numbers using recursion
function sumOfNumbers(n) {
  if (n === 0) {
    return 0;
  }
  return n + sumOfNumbers(n - 1);
}

const sumOfNum = 5;
console.log(`Sum of first ${num} numbers is: ${sumOfNumbers(sumOfNum)}`);

//   Reverse the sentence using recursion
function reverseSentence(sentence) {
  if (sentence === "") {
    return "";
  }
  return reverseSentence(sentence.substring(1)) + sentence.charAt(0);
}

const sentence = "Hello World";
console.log(`Reversed sentence: ${reverseSentence(sentence)}`);

// Power using recursion
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

const base = 2;
const exponent = 3;
console.log(
  `${base} raised to the power of ${exponent} is: ${power(base, exponent)}`
);

// Towers of Hanoi
function towersOfHanoi(n, fromRod, toRod, auxRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towersOfHanoi(n - 1, fromRod, auxRod, toRod);

  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);

  towersOfHanoi(n - 1, auxRod, toRod, fromRod);
}

const numDisks = 3;
towersOfHanoi(numDisks, "A", "C", "B"); // A, B, C are rod names

// Exponent using recursion
function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent(base, exp - 1);
}

const baseNum = 3;
const exp = 4;
console.log(
  `${base} raised to the power of ${exp} is: ${exponent(baseNum, exp)}`
);

// GCD using recursion
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

const num1 = 56;
const num2 = 98;
console.log(`GCD of ${num1} and ${num2} is: ${gcd(num1, num2)}`);
