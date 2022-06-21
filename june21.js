let name = Number(window.prompt("Enter your name: "))
console.log(name)

// Prompt-Sync

const ps1 = require("prompt-sync");
const prompt1 = ps1();

let name = prompt1("Enter your name: ");
console.log(`Hello ${name}`);

// Prompt-Sync Array input

const ps = require("prompt-sync");
const prompt = ps();

let num = prompt("Enter number of elements: ");

arr = [];
//   0 1 2 3

for (let i = 0; i < num; i++) {
  arr[i] = Number(prompt("Enter element: "));
}

for (let value of arr) console.log(value);

//console.log(arr);


const readFromConsole = require("readline");

const r = readFromConsole.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r.question("Enter first number: ", (num1) => {
  r.question("Enter second number: ", (num2) => {
    sum(num1, num2);
    console.log(sum(num1, num2));
    r.close();
  });
});

function sum(num1, num2) {
  return Number(num1) + Number(num2);
}


const readFromConsole = require("readline");

const r = readFromConsole.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r.question("Enter first number: ", (num1) => {
  r.question("Enter second number: ", (num2) => {
    sum(num1, num2);
    console.log(sum(num1, num2));
    r.close();
  });
});

function sum(num1, num2) {
  return Number(num1) + Number(num2);
}



const r = require("readline-sync");

let arr = [];

let size = r.question("Enter size: ");

while (arr.length < size) {
  let num = r.question("Enter number: ");

  arr.push(Number(num));
}

console.log(arr);



const r = require("readline-sync");

let arr = [];

//let size = r.question("Enter size: ");

while (true) {
  let num = r.question("Enter number: ");
  if (num === "end") break;
  arr.push(Number(num));
}

console.log(arr);
