/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  /// Search for element with staircase search algorithm
  const n = matrix.length;
  if (n === 0) return false;
  const m = matrix[0].length;
  if (m === 0) return false;

  if (matrix[0][0] > target || matrix[n - 1][m - 1] < target) return false;

  let i = 0;
  let j = m - 1;

  while (i <= n - 1 && j >= 0) {
    if (matrix[i][j] === target) return true;

    if (matrix[i][j] > target) j--;
    if (matrix[i][j] < target) i++;
  }

  return false;
};

const arr = [[1, 4, 7, 11, 15],
[2, 5, 8, 12, 19],
[3, 6, 9, 16, 22],
[10, 13, 14, 17, 24],
[18, 21, 23, 26, 30]];

const arr2 = [[-1, 3]];

console.log(searchMatrix(arr, 5));
console.log(searchMatrix(arr, 20));
console.log(searchMatrix([], 20));
console.log(searchMatrix([[]], 20));
console.log(searchMatrix(arr, 23));
console.log(searchMatrix(arr, 18));
console.log(searchMatrix(arr2, 1));
