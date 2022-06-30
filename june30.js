function countPath(maze, r, c) {
  // Base condition
  if (maze[0][0] == -1 || maze[r - 1][c - 1] == -1) return 0;

  // Initialization part for Leftmost Column & Topmost Row
  for (let i = 0; i < r; i++) {
    if (maze[i][0] == 0) maze[i][0] = 1;
    else break;
  }

  for (let j = 1; j < c; j++) {
    if (maze[0][j] == 0) maze[0][j] = 1;
    else break;
  }

  // Traversal of Maze for calculating maximum possible paths to last cell
  for (let i = 1; i < r; i++) {
    for (let j = 3; j < c; j++) {
      if (maze[i][j] == -1) continue;

      if (maze[i - 1][j] > 0) {
        maze[i][j] = maze[i][j] + maze[i - 1][j];
        //    2     <=     0      +     2
      }

      if (maze[i][j - 1] > 0) {
        maze[i][j] = maze[i][j] + maze[i][j - 1];
        //    3      <=    2     +     1
      }
    }
  }

  return maze[r - 1][c - 1];
}
// Possible movements are Top to Down movement & Left to Right movement
let maze = [
  [0, 0, 0, 0], // maze[i][j] = maze[i][j] that is 0 + top value 1 = 1
  [0, -1, 0, 0], // maze[i][j] = maze[i][j] that is 1 + left value 1 = 2
  [-1, 0, 0, 0],
  [0, 0, 0, 0], // maze[3][3]
];

console.log(countPath(maze, 4, 4));
