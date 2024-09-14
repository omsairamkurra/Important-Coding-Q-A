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
console.log(largest); // Output: 8
