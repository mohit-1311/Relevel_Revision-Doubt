let N = 8;

function isSafe(x, y, result) {
  if (x >= 0 && x < N && y >= 0 && y < N && result[x][y] == -1) return true;
}

// Driver function
function solveKnightTour() {
  let result = new Array(8);
  for (let i = 0; i < result.length; i++) result[i] = new Array(8);
  console.log(result);

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
}

function solveKnightRecursively(x, y, movei, result, xMove, yMove) {
  let k, next_x, next_y;

  for (k = 0; k < 8; k++) {
    next_x = x + xMove[k]; // 4 + 2 = 6
    next_y = y + yMove[k]; // 4 + 1 = 5

    if (isSafe(next_x, next_y, result)) {
      result[next_x][next_y] = movei;
      if (
        solveKnightRecursively(next_x, next_y, movei + 1, result, xMove, yMove)
      )
        return true;
      else result[next_x][next_y] = -1; // Backtracking
    }
  }
}
// (4,4) (6,5)
//  x,y  next_x, next_y
