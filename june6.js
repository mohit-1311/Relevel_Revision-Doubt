function printZform(mat, n) {
  var i, j;
  // print first row
  for (i = 0; i < n; i++) {
    console.log(mat[0][i]);
  }
  // Print diagonal
  i = 1;
  j = n - 2;
  while (i < n && j >= 0) {
    // print diagonal
    console.log(mat[i][j]);
    i++;
    j--;
  }
  // Print last row
  for (i = 1; i < n; i++) console.log(mat[n - 1][i]);
}
// Driver code
var mat = [
  [4, 5, 6, 8],
  [1, 2, 3, 1],
  [7, 8, 9, 4],
  [1, 8, 7, 5],
];
printZform(mat, 4);
