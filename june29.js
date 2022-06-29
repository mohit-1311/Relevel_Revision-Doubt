// Print the Lexicographic order of numbers from 1 to 10

function printLex(n) {
  let res = [];
  lexOrder(1, n, res);
  console.log(res);
}

function lexOrder(target, n, res) {
  if (target > n) return; // n=10
  res.push(target); // res=[1, 10, 2]

  //Here (target=1)
  lexOrder(target * 10, n, res); // It returned because 100 > 10
  // Returned here (target=1)

  if (target % 10 != 9) {
    lexOrder(target + 1, n, res); // target=11
    // Returned here
  }
  // Out of if block
}

// First we called lexOrder for target=1
// Second lexOrder for target=10 // STARTED HERE
// Third lexOrder for target=100 => Got over immediately and we came out
// Fourth lexOrder for target=11 => Got over immediately and we came out
// Second lexOrder for target=10 got fully executed // ENDED HERE
// We Return to the First Recursive call where target was 1

// 1 10 11

// 1 to n=10 // 1 2 3 4 5 6 7 8 9 10
// 1 10 2 3 4

// 1 to n=24 // 1 10 11 12 13...19 2 20 21 22 23 24 3 4 5 6 7
