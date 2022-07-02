// Time Complexity: Time taken to execute your entire code
// Space Complexity: Space required by your code while execution

// Longest Non-Consecutive Subsequence
function longestNonConsecutiveSeq(arr) {
  var count = 1,
    longest = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[i - 1]) {
      count++; // would be 3 for 'cde'
    } else {
      longest = Math.max(count, longest);
      //longest =   3
      count = 1;
    }
  }

  return longest;
}

var arr = [1, 2, 3, 1, 1, 1]; // Error if we don't reset count: 3 + 5 = 8
console.log(longestNonConsecutiveSeq(arr));

// abcdd ==> Non-Consecutive = 4
// aaaa ==> Consecutive sequence
