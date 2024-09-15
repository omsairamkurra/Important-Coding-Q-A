// Programs using Arrays

// Fibonacci using array
function generateFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  let fibonacci = [0, 1];

  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci;
}

const numElements = 10;
const fibonacciArray = generateFibonacci(numElements);
console.log(fibonacciArray);

// Largest among N numbers in an array

function findLargestNumber(arr) {
  if (arr.length === 0) return null;

  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

// Example usage:
const numbers = [3, 5, 7, 2, 8, 6];
const largest = findLargestNumber(numbers);
console.log(largest);

// Smallest among N numbers in an array

function findSmallestNumber(arr) {
  if (arr.length === 0) return null;

  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

const arr = [3, 5, 7, 2, 8, 6];
const smallest = findSmallestNumber(arr);
console.log(smallest);

// Reverse the array elements

function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  return arr;
}

const array = [1, 2, 3, 4, 5];
const reversed = reverseArray(numbers);
console.log("Reversed array:", reversed);

//   Insert an element in an array

function insertElement(arr, index, element) {
  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = element;
  return arr;
}

// Insert without using built-in methods
let insertInArray = [1, 2, 3, 4];
let result = insertElement(insertInArray, 2, 6);
console.log(result);

//Insert at the end of the array
let insertInArray1 = [1, 2, 3, 4];
insertInArray1.push(5);
console.log(insertInArray1);

// Insert at the beginning of the array
let insertInArray2 = [1, 2, 3, 4];
insertInArray2.unshift(0);
console.log(insertInArray2);

// Insert at a specific position in the array
let insertInArray3 = [1, 2, 3, 4];
insertInArray3.splice(2, 0, 9);
console.log(insertInArray3);

// Deleting an array element
function deleteElement(arr, index) {
  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
}

let deletedArr = [1, 2, 3, 4, 5];
deleteElement(deletedArr, 2); // Removes element at index 2
console.log(deletedArr); // Output: [1, 2, 4, 5]

//   Transpose of a matrix
function transposeMatrix(matrix) {
  return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
}

// Example usage:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const transposedMatrix = transposeMatrix(matrix);
console.log(transposedMatrix);

// Duplication removal
const resultOfUniqueArray = [1, 2, 3, 4, 3, 2, 5, 1];
const uniqueArray = resultOfUniqueArray.filter(
  (value, index, self) => self.indexOf(value) === index
);
console.log(uniqueArray);

// Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const arrOfLinearSearch = [10, 23, 45, 70, 11, 15];
const target = 70;

const resultOfLinearSearch = linearSearch(arrOfLinearSearch, target);
if (resultOfLinearSearch !== -1) {
  console.log(`Element found at index: ${resultOfLinearSearch}`);
} else {
  console.log("Element not found");
}

// Binary search
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const arrOfBinarySearch = [1, 3, 5, 7, 9, 11, 13];
const targetValue = 9;
const resultOfBinarySearch = binarySearch(arrOfBinarySearch, targetValue);

console.log(resultOfBinarySearch);

// Split the sorted array

function splitSortedArray(arr) {
  const middleIndex = Math.floor(arr.length / 2);

  const firstHalf = arr.slice(0, middleIndex);
  const secondHalf = arr.slice(middleIndex);

  return { firstHalf, secondHalf };
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const { firstHalf, secondHalf } = splitSortedArray(sortedArray);

console.log(firstHalf);
console.log(secondHalf);

// Matrix addition

function addMatrices(matrixA, matrixB) {
  if (
    matrixA.length !== matrixB.length ||
    matrixA[0].length !== matrixB[0].length
  ) {
    throw new Error("Matrices must have the same dimensions.");
  }

  const result = [];

  for (let i = 0; i < matrixA.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrixA[i].length; j++) {
      result[i][j] = matrixA[i][j] + matrixB[i][j];
    }
  }

  return result;
}

const matrixA = [
  [1, 2, 3],
  [4, 5, 6],
];

const matrixB = [
  [7, 8, 9],
  [10, 11, 12],
];

const resultOfMatrixAddition = addMatrices(matrixA, matrixB);

console.log(resultOfMatrixAddition);

// Sort an array
const sortedArrayOfNumbers = [5, 2, 9, 1, 5, 6];
numbers.sort((a, b) => a - b); // For ascending order
console.log(numbers);

numbers.sort((a, b) => b - a); // For descending order
console.log(numbers);
