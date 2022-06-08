// Pure & Impure Functions

const pureAdd = (num1, num2) => {
  return num1 + num2;
};

//console.log(pureAdd(5, 5));
//console.log(pureAdd(5, 5));

// Impure form

let mutate = 0;

const impureAdd = (num) => {
  //console.log(mutate);
  mutate = mutate + num;
  console.log(mutate);
};

console.log(mutate);

impureAdd(5);
console.log(mutate);
//console.log(impureAdd(5));


// Pass by Value

function PassByValue(a, b) {
  let temp;
  temp = b;
  b = a;
  a = temp;

  console.log(`Inside Pass By Value a = ${a} b = ${b}`);
}

let a = 1;
let b = 2;

PassByValue(a, b);

console.log(`After calling Pass By Value a=${a} b=${b}`);


// Pass by Reference

function PassByReference(obj) {
  let temp = obj.a;
  obj.a = obj.b;
  obj.b = temp;

  console.log(`Inside Pass By Reference a = ${obj.a} b = ${obj.b}`);
}

let obj = {
  a: 10,
  b: 20,
};

PassByReference(obj);

console.log(`After calling Pass By Reference a = ${obj.a} b = ${obj.b}`);
