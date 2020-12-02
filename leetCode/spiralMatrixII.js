/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const arrays = [];
  if (n === 0) return arrays;

  for (let i = 0; i < n; i++) {
    arrays.push(new Array(n).fill(null));
  }

  let startRow = 0, endRow = n - 1;
  let startCol = 0, endCol = n - 1;
  let count = 0;

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      count++;
      arrays[startRow][i] = count;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      count++;
      arrays[i][endCol] = count;
    }
    endCol--;

    for (let i = endCol; i >= startCol; i--) {
      count++;
      arrays[endRow][i] = count;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      count++;
      arrays[i][startCol] = count;
    }
    startCol++;
  }

  return arrays;
};

console.log(generateMatrix(3));
console.log(generateMatrix(0));
console.log(generateMatrix(2));
console.log(generateMatrix(5));
