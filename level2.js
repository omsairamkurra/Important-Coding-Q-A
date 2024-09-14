// Programs using Loops 
//Factorial without using function

let number = 5;
let factorial = 1;

for (let i = 1; i <= 5; i++) {
  factorial *= i;
}

console.log(`The factorial of ${number} is ${factorial}.`);

//Square of N

let n = 6;
let square = n * n;
console.log(square);

//Calculate x to the power y

let x = 2;
let y = 3;

let result = x ** y;
console.log(`${x} to the power of ${y} is ${result}.`);

//Multiplication table

let num = 4;

for (let i = 0; i <= 10; i++) {
  let result = num * i;
  console.log(`${num} x ${i} = ${result}`);
}

//Sum of natural numbers

// let naturalNumber = 10;
// let sum = (n * (n + 1)) / 2;

let naturalNumber = 10; // Number up to which you want to find the sum
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log(`The sum of the first ${naturalNumber} natural numbers is ${sum}.`);

//Fibonacci starting from any two numbers

function fibonacci(value) {
  let fibSeries = [0, 1];
  for (let i = 2; i < value; i++) {
    fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
  }

  return fibSeries;
}

let numTerms = 10;
let fibonacciSeries = fibonacci(numTerms);
console.log(`Fibonacci series with ${numTerms} terms:`, fibonacciSeries);

//Upper case to Lower case

let upperCaseString = "HELLO WORLD";
let lowerCaseString = upperCaseString.toLowerCase();

console.log(`Original string: ${upperCaseString}`);
console.log(`Lowercase string: ${lowerCaseString}`);

//Lower to upper

let lowerCaseStr = "hello world";
let upperCaseStr = lowerCaseStr.toUpperCase();

console.log(`Original string: ${lowerCaseStr}`);
console.log(`Uppercase string: ${upperCaseStr}`);

//Pascal triangle

function generatePascalsTriangle(numRows) {
  let triangle = [];

  for (let row = 0; row < numRows; row++) {
    let newRow = [];
    for (let col = 0; col <= row; col++) {
      if (col === 0 || col === row) {
        newRow[col] = 1;
      } else {
        newRow[col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
      }
    }
    triangle.push(newRow);
  }
  return triangle;
}

let numRows = 5;
let pascalsTriangle = generatePascalsTriangle(numRows);
pascalsTriangle.forEach((row) => {
  console.log(row.join(" "));
});


//LCM & GCD
function gcd(a, b) {
  while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
  }
  return a;
}

function lcm(a, b) {
  let product = a * b;
  if (product < 0) {
      product = -product;
  }
  return product / gcd(a, b);
}

let num1 = -12;
let num2 = 18;

console.log(`GCD of ${num1} and ${num2}:`, gcd(num1, num2)); // Output: 6
console.log(`LCM of ${num1} and ${num2}:`, lcm(num1, num2)); // Output: 36

//Prime numbers between two ranges
function isPrime(num) {
  if (num <= 1) return false; 
  for (let i = 2; i <= num / 2; i++) { 
      if (num % i === 0) return false;
  }
  return true;
}

function findPrimesInRange(start, end) {
  let primes = [];
  for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
          primes.push(i);
      }
  }
  return primes;
}

let start = 10;
let end = 50;
let primes = findPrimesInRange(start, end);

console.log(`Prime numbers between ${start} and ${end}:`, primes);

//Factors of a number

function findFactors(num) {
  let factors = [];
  for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
          factors.push(i);
      }
  }
  return factors;
}
let c = 28;
let factors = findFactors(c);

console.log(`Factors of ${c}:`, factors);


// Prime Factors
function findPrimeFactors(num) {
  let primeFactors = [];
  
  while (num % 2 === 0) {
      primeFactors.push(2);
      num = num / 2;
  }
  
  for (let i = 3; i <= num; i += 2) {
      while (num % i === 0) {
          primeFactors.push(i);
          num = num / i;
      }
  }
  
  return primeFactors;
}

let primeNumber = 56;
let primeFactors = findPrimeFactors(primeNumber);

console.log(`Prime factors of ${primeNumber}:`, primeFactors);


// Bin to dec and oct
function binToDec(binaryStr) {
  return parseInt(binaryStr, 2);
}

function binToOct(binaryStr) {
  let decimal = parseInt(binaryStr, 2); 
  return decimal.toString(8);
}

let binary = "110101";

let decimal = binToDec(binary);
let octal = binToOct(binary);

console.log(`Binary ${binary} in Decimal:`, decimal);  // Output: 53
console.log(`Binary ${binary} in Octal:`, octal);      // Output: 65


// Count the number of digit in an integer

function countDigits(num) {
  if (num < 0) num = -num; 
  return num.toString().length;
}

let count = -12345;
let digitCount = countDigits(count);

console.log(`Number of digits in ${count}:`, digitCount);

// Reverse the digits of given number

function reverseNumber(num) {
  const numStr = num.toString();
  
  const reversedStr = numStr.split('').reverse().join('');
  
  return parseInt(reversedStr, 10);
}

const originalNumber = 12345;
const reversedNumber = reverseNumber(originalNumber);
console.log(reversedNumber);

//Number palindrome

function isPalindrome(number) {
  const str = number.toString();
  
  const reversedStr = str.split('').reverse().join('');
  
  return str === reversedStr;
}

console.log(isPalindrome(12321));
console.log(isPalindrome(12345));

//Digit summation

function sumDigits(num) {
  const numStr = num.toString();
  
  let sum = 0;
  
  for (let char of numStr) {
    sum += parseInt(char, 10);
  }
  
  return sum;
}

console.log(sumDigits(1234));
console.log(sumDigits(567));


//Amstrong checking

function isArmstrongNumber(num) {
  const digits = num.toString().split('');
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
  return sum === num;
}

console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(9474));
console.log(isArmstrongNumber(123));
