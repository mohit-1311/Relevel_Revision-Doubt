// Closures - Closure is a property of Javascript

function outer() {
  var num = 1;

  function inner() {
    console.log(num);
  }
  return inner;
}
var number = outer();
number();

//console.log(num);

// Closures - Closure is a property of Javascript

function party() {
  const cake = "chocolate";

  return function IAte() {
    console.log(cake);
  };
}

party()();

// Closures - Closure is a property of Javascript

function party() {
  const cake = "chocolate";
  var num = 2;

  if (num === 1) {
    return function IAte() {
      console.log(cake);
    };
  } else {
    return function anything() {
      console.log(22);
    };
  }
}

party()();

{
    "name": "Mohit",
    "class": "relevel",
    "val": 2
}

//Advanced constructs -3
//June 3 assignment

A bike = 10 litres, B bike = 5 litres of Petrol

A can go 12 Km/Litre    4 Km/Litre

For 1 Litre he can go 2 Km

For 10 litres he can go 2x10 = 20 Km

let halt = [40 km, 98 km, 134, 179, 211, 248]
//           1      2      3    4    5     6
Halt = Station = Stoppage

function check(s) {
  if (s === "") console.log("Empty");
  else console.log(s);
}

// s data type is String
// null data type Object

check("Mohit");
check("");
