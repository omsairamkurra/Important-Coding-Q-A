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
