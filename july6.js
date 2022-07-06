let arr = [1, 2, 3, 4];
console.log(arr.slice(1));
console.log(arr);


// splice() & slice() are different
// slice() takes out a portion of the array starting from whatever index you provide it
// splice() add/removes elements in the array

function reverse(arr) {
  if (arr.length == 0) return arr;
  return reverse(arr.slice(1)) + arr[0]; // 43
  //                [2,3,4]
  //                [3,4]
  //                [4]
  //                []
}
let arr = [1, 2, 3, 4];
console.log(reverse(arr));



!!(obj1 && obj2); //==> Real Boolean Value

obj1 && obj2; //==> Truthy or Falsey Value

// Boolean values: true & false

let obj1 = undefined;
let obj2 = {
  name: "M",
};

if (obj1 && obj2) {
  console.log("Hi");
}

if (!!(obj1 && obj2)) {
  console.log("Hello");
}

// Falsy values:
// false, 0, null, undefined, ""

// Truthy values:
// true, 1, "0", 42, Infinity, -Infinity
