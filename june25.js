// + - * /
// ^ ===> XOR operator

// 1st case: 0^1
// 2nd case: 1^1
// 3rd case: 1^0
// 4th case: 0^0

console.log(1 ^ 2);

// 01 ===> 1
// 10 ===> 2
// 11 ===> XOR ===> 3

// Find unique element using XOR

let a = [555, 555, 2];

let xor = 0;

for (let i = 0; i < a.length; i++) {
  xor = xor ^ a[i];
  //     0 ^ 555 = 555
  //     555 ^ 555 = 0
  //      0  ^  2  = 2
}
console.log(xor);
// 0000000000
// 1000101011
// 1000101011

// Reduce function of Array in JavaScript

const array = [15, 16, 17, 18, 19];

function reducer(previous, current, index, array) {
  const returns = previous + current;
  console.log(
    `previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

array.reduce(reducer);
