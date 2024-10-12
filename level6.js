// Programs using Pointers

// Function to calculate the area of a circle
function calculateArea(pointer) {
  const radius = pointer.radius;
  return Math.PI * radius * radius;
}

let circle = { radius: 5 };
let area = calculateArea(circle);
console.log(`The area of the circle is: ${area}`);

//   function pointers
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function performOperation(a, b, operation) {
  return operation(a, b);
}

let result1 = performOperation(10, 5, add);
let result2 = performOperation(10, 5, subtract);

console.log(`Addition result: ${result1}`);
console.log(`Subtraction result: ${result2}`);

// duplication removal using pointers
function removeDuplicates(arrPointer) {
  let uniqueArray = [...new Set(arrPointer.array)];

  arrPointer.array = uniqueArray;
}

let numbers = { array: [1, 2, 2, 3, 4, 4, 5] };

removeDuplicates(numbers);

console.log(`Array after removing duplicates: ${numbers.array}`);

// Sorting integer array using pointers
function sortArray(arrPointer) {
  arrPointer.array.sort((a, b) => a - b);
}

let numbersArray = { array: [34, 7, 23, 32, 5, 62] };

sortArray(numbersArray);

console.log(`Sorted array: ${numbersArray.array}`);

// Sum of array using pointers
// Function to calculate the sum of an array
function sumArray(arrPointer) {
  let sum = 0;
  for (let i = 0; i < arrPointer.array.length; i++) {
    sum += arrPointer.array[i];
  }
  return sum;
}

let arrayOfNums = { array: [10, 20, 30, 40, 50] };
let totalSum = sumArray(arrayOfNums);
console.log(`Sum of the array: ${totalSum}`);

// Count number of words using pointers
function countWords(strPointer) {
  let str = strPointer.text.trim();
  if (str === "") return 0;

  let words = str.split(/\s+/);

  return words.length;
}

let text = { text: "This is an example sentence to count words." };
let wordCount = countWords(text);
console.log(`Number of words: ${wordCount}`);

// Length of a string using pointers
function stringLength(strPointer) {
  return strPointer.text.length;
}

let myString = { text: "Hello, World!" };
let length = stringLength(myString);
console.log(`Length of the string: ${length}`);

// Reverse the String Using Pointers
function reverseString(strPointer) {
  let reversedString = strPointer.text.split("").reverse().join("");

  strPointer.text = reversedString;
}

let myStr = { text: "Hello, World!" };

reverseString(myStr);

console.log(`Reversed string: ${myStr.text}`);
