// Programs using Strings

// Program to Count Blanks,Tabs and Newlines
function countBlanksTabsNewlines(input) {
  let blanks = 0;
  let tabs = 0;
  let newlines = 0;

  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (char === " ") {
      blanks++;
    } else if (char === "\t") {
      tabs++;
    } else if (char === "\n") {
      newlines++;
    }
  }

  return {
    blanks: blanks,
    tabs: tabs,
    newlines: newlines,
  };
}

let text = "This is a text with\tblanks, tabs\tand\nnewlines.\nAnother line.";
let result = countBlanksTabsNewlines(text);
console.log(result);

// Palindrome checking
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const reversedStr = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversedStr;
}

const input = "A man, a plan, a canal, Panama!";
const palindromeResult = isPalindrome(input);
console.log(`Is the input a palindrome? ${result}`);

// convert a name into its ascii values
function stringToAsciiValues(str) {
  const asciiValues = [];

  for (let i = 0; i < str.length; i++) {
    asciiValues.push(str.charCodeAt(i));
  }

  return asciiValues;
}

let str = "John Doe";
const asciiResult = stringToAsciiValues(str);
console.log(`ASCII values for "${str}":`, asciiResult);

// calculating string length without strlen function
function calculateStringLength(str) {
  let length = 0;

  for (let i = 0; str[i] !== undefined; i++) {
    length++;
  }

  return length;
}

const inputString = "Hello, World!";
const lengthResult = calculateStringLength(inputString);
console.log(`The length of the string "${inputString}" is: ${lengthResult}`);

// comparing 2 strings without strcmp function
function compareStrings(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      return false;
    }
  }

  return true; // Strings are equal
}

const string1 = "Hello, World!";
const string2 = "Hello, Kurra!";
const string3 = "Hello, OmSai!";

const result1 = compareStrings(string1, string2); // true
const result2 = compareStrings(string1, string3); // false

console.log(`Comparing "${string1}" and "${string2}": ${result1}`);
console.log(`Comparing "${string1}" and "${string3}": ${result2}`);

// copying one string to another without using strcpy
function copyString(source) {
  let copiedString = "";
  y;

  for (let i = 0; i < source.length; i++) {
    copiedString += source[i];
  }

  return copiedString;
}

const originalString = "Hello, World!";
const newString = copyString(originalString);

console.log(`Original String: "${originalString}"`);
console.log(`Copied String: "${newString}"`);

// string concatenation without using strcat function
function concatenateStrings(str1, str2) {
  let concatenatedString = "";

  for (let i = 0; i < str1.length; i++) {
    concatenatedString += str1[i];
  }

  for (let j = 0; j < str2.length; j++) {
    concatenatedString += str2[j];
  }

  return concatenatedString;
}

const str1 = "Hello, ";
const str2 = "World!";
const resultString = concatenateStrings(str1, str2);

console.log(`Concatenated String: "${resultString}"`);

// Pattern replacement
function replacePattern(inputString, pattern, replacement) {
  const regex = new RegExp(pattern, "g");
  return inputString.replace(regex, replacement);
}

const originalStr =
  "The quick brown fox jumps over the lazy dog. The dog is happy.";
const pattern = "dog";
const replacement = "cat";

const resultStr = replacePattern(originalStr, pattern, replacement);

console.log(`Original String: "${originalStr}"`);
console.log(`Modified String: "${resultStr}"`);

// Finding vowels
function findVowels(inputString) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let foundVowels = [];

  for (let char of inputString) {
    if (vowels.includes(char)) {
      vowelCount++;
      foundVowels.push(char);
    }
  }

  return {
    count: vowelCount,
    vowels: foundVowels,
  };
}

const word = "Hello, World!";
const output = findVowels(word);

console.log(`Input String: "${word}"`);
console.log(`Number of Vowels: ${output.count}`);
console.log(`Found Vowels: ${output.vowels.join(", ")}`);

// Sorting in alphabetical order
function sortAlphabetically(stringsArray) {
  return stringsArray.sort((a, b) => a.localeCompare(b));
}

const words = ["banana", "apple", "cherry", "date", "fig", "grape"];
const sortedWords = sortAlphabetically(words);

console.log("Original Array:", words);
console.log("Sorted Array:", sortedWords);

// Searching sub string in a string
function searchSubstring(mainString, subString) {
  const position = mainString.indexOf(subString);
  return position !== -1
    ? `Substring found at index ${position}`
    : "Substring not found";
}

const mainString = "Hello, World!";
const subString = "World";
const resultOfSearchSubstring = searchSubstring(mainString, subString);

console.log(result);

// Find the frequency of a character in a string
function findCharacterFrequency(inputString, charToFind) {
  let count = 0;

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === charToFind) {
      count++;
    }
  }

  return count;
}

const inputValue = "Hello, World!";
const charToFind = "o";
const frequency = findCharacterFrequency(inputValue, charToFind);

console.log(
  `The character "${charToFind}" appears ${frequency} times in the string "${inputValue}".`
);

// Remove characters in string except alphabets
function removeNonAlphabets(inputString) {
  let resultString = "";

  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];

    if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
      resultString += char;
    }
  }

  return resultString;
}

const nonAlphabets = "Hello, World! 123";
const resultOfNonAlphabets = removeNonAlphabets(nonAlphabets);

console.log(`Original String: "${nonAlphabets}"`);
console.log(
  `String after removing non-alphabet characters: "${resultOfNonAlphabets}"`
);

// Reverse the given string
function reverseString(inputString) {
  return inputString.split("").reverse().join("");
}

const actualString = "Hello, World!";
const reversedString = reverseString(actualString);

console.log(`Original String: "${actualString}"`);
console.log(`Reversed String: "${reversedString}"`);
