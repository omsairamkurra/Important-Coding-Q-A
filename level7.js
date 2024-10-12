// Programs using Files

const fs = require("fs");

// Write a sentence into a file

const content = "This is the sentence to write into the file.";

fs.writeFile("output.txt", content, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
    return;
  }
  console.log("File has been written successfully.");
});

// Employee file

const employee = {
  id: 101,
  name: "John Doe",
  position: "Software Engineer",
  department: "Engineering",
  salary: 75000,
};

const employeeData = JSON.stringify(employee, null, 2);

fs.writeFile("employee.json", employeeData, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
    return;
  }
  console.log("Employee file has been written successfully.");
});

// Employee-struct
function Employee(id, name, position, department, salary) {
  this.id = id;
  this.name = name;
  this.position = position;
  this.department = department;
  this.salary = salary;

  this.displayInfo = function () {
    console.log(`Employee ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Position: ${this.position}`);
    console.log(`Department: ${this.department}`);
    console.log(`Salary: $${this.salary}`);
  };
}

const employee1 = new Employee(
  101,
  "Ram",
  "Software Engineer",
  "Development",
  null
);
employee1.displayInfo();

// Copying the content of one file into another
const sourceFile = "source.txt";
const destinationFile = "destination.txt";

fs.readFile(sourceFile, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the source file:", err);
    return;
  }

  fs.writeFile(destinationFile, data, (err) => {
    if (err) {
      console.error("Error writing to the destination file:", err);
      return;
    }
    console.log("Content copied successfully from source to destination file.");
  });
});

// Convert the file contents in Upper-case & Write Contents in a output file
const srcFile = "source.txt";
const upperCaseTextFile = "upperCaseTextFile.txt";

fs.readFile(srcFile, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the source file:", err);
    return;
  }

  const upperCaseContent = data.toUpperCase();

  fs.writeFile(upperCaseTextFile, upperCaseContent, (err) => {
    if (err) {
      console.error("Error writing to the output file:", err);
      return;
    }
    console.log(
      "Content converted to uppercase and written to output file successfully."
    );
  });
});

// Compare two text/data files in js Programming
const file1 = "file1.txt";
const file2 = "file2.txt";

const compareFiles = (file1, file2) => {
  fs.readFile(file1, "utf8", (err, data1) => {
    if (err) {
      console.error(`Error reading ${file1}:`, err);
      return;
    }

    fs.readFile(file2, "utf8", (err, data2) => {
      if (err) {
        console.error(`Error reading ${file2}:`, err);
        return;
      }

      if (data1 === data2) {
        console.log("The files are identical.");
      } else {
        console.log("The files are different.");
      }
    });
  });
};

compareFiles(file1, file2);

// Reading & writing in files
const sourceFile1 = "source.txt";
const destinationFile1 = "destination1.txt";

const readAndWriteFiles = (source, destination) => {
  fs.readFile(source, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading ${source}:`, err);
      return;
    }

    console.log(`Content read from ${source}:`);
    console.log(data);

    fs.writeFile(destination, data, (err) => {
      if (err) {
        console.error(`Error writing to ${destination}:`, err);
        return;
      }
      console.log(`Content written to ${destination} successfully.`);
    });
  });
};

readAndWriteFiles(sourceFile1, destinationFile1);

// ODD-EVEN splitting
function splitOddEven(arr) {
  const oddNumbers = [];
  const evenNumbers = [];

  arr.forEach((num) => {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    } else {
      oddNumbers.push(num);
    }
  });

  return {
    odd: oddNumbers,
    even: evenNumbers,
  };
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = splitOddEven(numbers);

console.log("Odd Numbers:", result.odd);
console.log("Even Numbers:", result.even);

// Display same source code as output

const sourceCodeFile = "sourceCode.js";

const displaySourceCode = (filePath) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading ${filePath}:`, err);
      return;
    }

    console.log("Source Code:\n");
    console.log(data);
  });
};

displaySourceCode(sourceCodeFile);

// Read a string of text from a file

const filePath = "upperCaseTextFile.txt";
const readTextFromFile = (filePath) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading ${filePath}:`, err);
      return;
    }

    console.log("Text read from file:\n");
    console.log(data);
  });
};

readTextFromFile(filePath);
