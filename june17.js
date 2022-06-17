// Recursion: A function calling itself until it reaches a Base condition

// Base condition: Stopping condition
// 5! = 5x4x3x2x1

function factorial(num) {
  if (num == 1 || num == 0) {
    return 1;
  }

  return num * factorial(num - 1);
  //      5 * factorial(4) => 5 * 24 = 120
  //                     |
  //               4 * factorial(3) => 4 * 6 = 24
  //                             |
  //                        3 * factorial(2) => 3 * 2 = 6
  //                                   |
  //                                   |
  //                                 2 * factorial(1) => 2*1=2
  //                                         |
  //                                         |
  //                                         1
}

console.log(factorial(0));
console.log(factorial(5));


function check() {
  for (let i = 1; i <= 10; i++) {
    if (i == 5) continue;

    console.log(i);
  }

  console.log("Mohit");
}

check();


function fibo(num = 2) {
  if (num == 0) return 0;
  if (num == 1 || num == 2) {
    return 1;
  }

  return fibo(num - 1) + fibo(num - 2);
  //            fibo(4)      +  fibo(3)
  //            fibo(2)     +   fibo(1)
  //               |              |
  //               1              1
}

let num = 5;
for (let i = 0; i < num; i++) {
  console.log(fibo(i));
}
// Fibonacci series of numbers
// 0   1    1      2    3
// 0th 1st  2nd   3rd
