let N = 8;

function isSafe(x, y, result) {
  if (x >= 0 && x < N && y >= 0 && y < N && result[x][y] == -1) return true;
  else return false;
}

// Driver function
function solveKnightTour() {
  let result = new Array(8);
  for (let i = 0; i < result.length; i++) result[i] = new Array(8);
  //console.log(result);

  // Initialization
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) result[i][j] = -1;

  // Knight's movements
  let xMove = [2, 1, -1, -2, -2, -1, 1, 2];
  let yMove = [1, 2, 2, 1, -1, -2, -2, -1];

  // Knight starts from here
  result[0][0] = 0;

  if (!solveKnightRecursively(0, 0, 1, result, xMove, yMove)) {
    console.log("Solution does not exist");
    return false;
  }
  console.log(result);
}
// N = 2 // N x N = 2 x 2 = 4
// [[0,1],
//  [2,3]]
function solveKnightRecursively(x, y, movei, result, xMove, yMove) {
  let k, next_x, next_y;
  // Base case
  if (movei == N * N) return true;

  for (k = 0; k < 8; k++) {
    next_x = x + xMove[k]; // 4 + 1 = 5
    next_y = y + yMove[k]; // 4 + 2 = 6

    if (isSafe(next_x, next_y, result)) {
      result[next_x][next_y] = movei;
      if (
        solveKnightRecursively(next_x, next_y, movei + 1, result, xMove, yMove)
        //                                       64
      )
        return true;
      else result[next_x][next_y] = -1; // Backtracking
    }
  }
  return false;
}

// (0,0) == current coordinates
// (2,1) == next_x, next_y

solveKnightTour();



// Time Complexity

let a = 0,
  b = 0;

for (let i = 0; i < N; i++) {
  a = a + 2;
}

for (let j = 0; j < M; j++) {
  b = b + 2;
}

// Time ==> O(N+M)

// Worst to Best Time Complexity
// O(N!) > O(2^N) > O(N^2) > O(NlogN) > O(N) > O(logN) > O(1)


// Time Complexity
let i,
  j,
  k = 0;

for (i = n / 2; i <= n; i++) {
  // n=4, (i=2; i<=4; i++) //3,4 ==> running for n/2 iterations
  for (j = 2; j <= n; j = j * 2) {
    // runs for log(n) iterations
    k = k + n / 2;
  }
}

// Time ==> O( n/2 * log(n)  ) ==> O(nlogn/2) ==> O(nlogn)


// What does it mean when we say that an algorithm X is Asymptotically more efficient
// than an algorithm Y ?

//1- X will always be a better choice for Small inputs

//2- Y will always be a better choice for Small inputs

//3- X will always be a better choice for Large inputs

//4- Y will always be a better choice for Large inputs

// Option 3 is correct because X is said to be asymptotically better than Y as
// X takes smaller time than Y for all input sizes n which are larger than n0


//You have 2 algorithms X and Y 
//X has a running time of O(n) = O(100)
//Y has a running time of O(logn) = O(log100) = O(4.6)

//=> Y is better
//Y will always run faster than X ? Answer: No
//Y will always run faster than X for n > n0 ? Answer: Yes

// If n < n0: Y may or may not be faster than X
