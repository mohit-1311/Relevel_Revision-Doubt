function sumDigits(num) {
  if (num === 0) return 0;
  return (num % 10) + sumDigits(parseInt(num / 10));
  //          5     + sumDigits(2)
  //                       2     +   sumDigits(0) = 0 => 2
  //                                     return 0
}

console.log(sumDigits(25));

// 123 = 3
// 12 = 3+2
// 1 = 3+2+1
// 0 Finished



function sumRec(n) {
  //if (n === 0) return n;
  if (n <= 1) return n;
  return n + sumRec(n - 1);
  //     5 +   sumRec(4)
  //     4 +   sumRec(3)
  //     3 +   sumRec(2)
  //     2 +   sumRec(1) => 1 ====>3
  //              |
  //              1
}
let n = 0;
// 5 + 4 + 3 + 2 + 1
console.log(sumRec(n));


function mul_table(N, i) {
  if (i > 10) return;
  console.log(N * i); // 5*2
  return mul_table(N, i + 1);
}

//let N = 5;
console.log(mul_table(5, 1));
// 5
// 10



function fun(n) {
  if (n === 0 || n === 1) return n;

  if (n % 3 != 0) return 0;

  return fun(n / 3);
}

console.log(fun(6)); // 0
console.log(fun(9)); // 1

// 3 powers = 3,9,27..
