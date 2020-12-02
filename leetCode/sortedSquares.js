/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  for (let i = 0; i < A.length; i++) {
    const num = A[i];
    A[i] = Math.pow(num, 2)
  }

  return A.sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100])
console.log(sortedSquares([-7, -3, 2, 3, 11]), [4, 9, 9, 49, 121])
console.log(sortedSquares([-7]), [4])
