//Find area of a rectangle

function areaOfRectangle(l, b) {
  const area = l * b;
  return area;
}

const length = 10;
const breadth = 6;
const resultAreaOfRectangle = areaOfRectangle(length, breadth);
console.log("areaOfRectangle", resultAreaOfRectangle);

//Find ASCII value of a character

const character = "A";
const asciiValue = character.charCodeAt(0);
console.log("asciiValue", asciiValue);

//Find ASCII value of a characters in string
const str = "Hello";
for (let i = 0; i < str.length; i++) {
  console.log("asciiValue", `${str[i]}: ${str.charCodeAt(i)}`);
}

//Convert Celsius to Fahrenheit

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

const celsius = 25;
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C is ${fahrenheit}°F`);

//Swap value of two variables
let a = 5;
let b = 10;

let temp = a;
a = b;
b = temp;

console.log(`Swap value : ${a}, ${b}`);

//Check the given number is odd or even

function oddOrEven(num) {
  return num % 2 !== 0 ? "Odd" : "Even";
}

const num = 11;
const resultOfOddOrEven = oddOrEven(num);
console.log(resultOfOddOrEven);

//Check whether a character is vowel or consonant

function checkVowelOrConsonant(char) {
  char = char.toLowerCase();

  const vowels = ["a", "e", "i", "o", "u"];

  if (vowels.includes(char)) {
    console.log(`${char} is a vowel.`);
  } else if (char.match(/[a-z]/i)) {
    console.log(`${char} is a Consonent.`);
  } else {
    console.log(`${char} is not a valid letter.`);
  }
}

const char = "a";
checkVowelOrConsonant(char);

//Find largest among three numbers

function largestNumberInThreeNumbers(a, b, c) {
  let largest;

  if (a >= b && a >= c) {
    largest = a;
  } else if (b >= c && b >= a) {
    largest = b;
  } else {
    largest = c;
  }

  return largest;
}

let num1 = 10;
let num2 = 15;
let num3 = 20;

const resultOfLargestNumber = largestNumberInThreeNumbers(num1, num2, num3);
console.log(resultOfLargestNumber);

// Leap year checking

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const year = 2000;
if (isLeapYear(year)) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}

// Positive negative checking

function checkSign(number) {
  if (number > 0) {
    console.log(`${number} is positive.`);
  } else if (number < 0) {
    console.log(`${number} is negative.`);
  } else {
    console.log(`${number} is zero.`);
  }
}

checkSign(10);
checkSign(-5);
checkSign(0);

//Quadratic equation
function manualSqrt(num) {
  if (num < 0) {
    return NaN;
  }
  let guess = num / 2;
  let precision = 0.000001;

  while (guess * guess - num > precision || num - guess * guess > precision) {
    guess = (guess + num / guess) / 2;
  }

  return guess;
}

function solveQuadratic(a, b, c) {
  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    const sqrtDiscriminant = manualSqrt(discriminant);
    const x1 = (-b + sqrtDiscriminant) / (2 * a);
    const x2 = (-b - sqrtDiscriminant) / (2 * a);
    console.log(`The roots are ${x1} and ${x2}.`);
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    console.log(`The root is ${x}.`);
  } else {
    const realPart = -b / (2 * a);
    const imaginaryPart = manualSqrt(-discriminant) / (2 * a);
    console.log(
      `The roots are ${realPart} + ${imaginaryPart}i and ${realPart} - ${imaginaryPart}i.`
    );
  }
}

solveQuadratic(1, -3, 2);
solveQuadratic(1, -2, 1);
solveQuadratic(1, 2, 5);
