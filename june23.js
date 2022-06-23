const read = require("readline-sync");

let rows = 3,
  cols = 2;

let arr = new Array(cols);

console.log(arr);

for (var i = 0; i < rows; i++) {
  // 0 , 1, 2
  arr[i] = [];
  console.log(arr);
}

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    arr[i][j] = read.question("Enter Number: ");
  }
}

console.log(arr);

// Password Validation 

// Password must contain an uppercase letter
// Password must contain a lowercase letter
// Password must contain a symbol – !@#$%^&*()_+~?><:"{}|
// Password must contain a digit

const NUMBERS = "1234567890";
const SYMBOLS = '!@#$%^&*()_+~?><:"{},|';
const LOWER_ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const UPPER_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const passwordValidation = (arr) => {
  const validation = [];
  const numbers = NUMBERS.split(""); // numbers = [1,2,3,4,5,6,7,8,9,0]
  const symbols = SYMBOLS.split("");
  const lowerCase = LOWER_ALPHABET.split("");
  const upperCase = UPPER_ALPHABET.split("");
  arr.map((item) => {
    let isNumber,
      isLowerCase,
      isUpperCase,
      isSymbol = false;
    item.split("").map((pwd) => {
      if (numbers.includes(pwd)) isNumber = true; // a
      else if (symbols.includes(pwd)) isSymbol = true; // a
      else if (lowerCase.includes(pwd)) isLowerCase = true; // a
      else if (upperCase.includes(pwd)) isUpperCase = true;
    }); // mapping ends here

    if (isNumber && isLowerCase && isUpperCase && isSymbol) {
      validation.push(`${item} is valid`);
      // aahfD$jhk67, is valid
    } else {
      validation.push(`${item} is invalid`);
    }
  });
  return validation;
};

console.log(passwordValidation(["aahfD$jhk67,", "ghfjhagsju,", "hsjFG$**)&"]));



// Custom Sort

// let Myarr = [1,1,1,7,6,6,8]
// referenceArr = [6,7,1,2,8]

// sortedArr = [6,6,7,1,1,1,8]
// Normally_Sorted_Arr = [1,1,1,6,6,7,8]


// Fibonacci Series

function fibonacci(num) {
  if (num == 0) return 0; // not satisfied
  if (num == 1 || num == 2) {
    // not satisfied
    return 1;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
  //            fibonacci(2)     +   fibonacci(1)
  //               |              |
  //               1              1
}

let num = 4;
for (let i = 0; i < num; i++) {
  console.log(fibonacci(i));
}

//  0   1   1   2 3 5 8
// 0th 1st 2nd


// Prints Character corresponding to an ASCII Value

let char = String.fromCharCode(97);
console.log(char);


// Prints ASCII Value of Character

const str = "hdsdb";

const ascii = str.charCodeAt(1);

console.log(ascii);
