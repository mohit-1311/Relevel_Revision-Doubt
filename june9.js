// Closures

function parentFunction(parentVariable) {
  const cake = "chocolate";

  return function childFunction(childVariable) {
    console.log("Parent Variable: " + parentVariable);
    console.log("Child Variable: " + childVariable);
    console.log(cake);
  };
}

const newFunction = parentFunction("outside");
newFunction("inner");



User Input methods:

// Method 1 - Prompt Sync

// npm install prompt-sync

const ps = require("prompt-sync");
const prompt = ps();

let num = prompt("Enter number of elements: ");
let arr = [];

for (let i = 0; i < num; i++) {
  arr[i] = prompt("Enter element: ");
}

// arr[0] = 1
// arr[1] = 2

console.log(arr);

//for (let value of arr) console.log(value);


// Method -2 Readline method

// Require the module

const readFromConsole = require("readline");

// Create an interface

const r = readFromConsole.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Performed function that we wanted to perform

r.question("Enter first number: ", (num1) => {
  r.question("Enter second number: ", (num2) => {
    let sum = parseFloat(num1) + parseFloat(num2);
    console.log("Result is: ", sum);
    r.close();
  });
});
