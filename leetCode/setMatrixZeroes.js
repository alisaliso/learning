/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/// O(n*m) Time Complexity
/// O(n) Space Complexity

// var setZeroes = function (matrix) {
//   const rows = [];
//   const cols = [];

//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] === 0) {
//         rows.push(i);
//         cols.push(j)
//       }
//     }
//   }

//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (rows.includes(i) || cols.includes(j)) {
//         matrix[i][j] = 0
//       }
//     }
//   }

//   return matrix;
// };

/// Efficiant solution
/// O(n*m) Time Complexity
/// O(1) Space Complexity

var setZeroes = function (matrix) {
  /// Check if matrix contains rows and columns
  const rowsNumber = matrix.length;
  if (rowsNumber === 0) return;
  const colsNumber = matrix[0].length;
  if (colsNumber === 0) return;

  /// 1. Check if the first row or first column contains ZERO and safe the result in bool variable
  let isFirstRowHasZERO = false;
  let isFirstColHasZERO = false;

  /// Check first row
  for (let i = 0; i < colsNumber; i++) {
    if (matrix[0][i] === 0) {
      isFirstRowHasZERO = true;
      break;
    }
  }

  /// Check first col
  for (let i = 0; i < rowsNumber; i++) {
    if (matrix[i][0] === 0) {
      isFirstColHasZERO = true;
      break;
    }
  }

  /// 2. Update first row and first column with zero
  for (let i = 1; i < rowsNumber; i++) {
    for (let j = 1; j < colsNumber; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0
      }
    }
  }

  /// 3. Update every element depending on most left and most top element
  for (let i = 1; i < rowsNumber; i++) {
    for (let j = 1; j < colsNumber; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  /// 4. Update each element in first row and first column if bool variables is true
  if (isFirstRowHasZERO) {
    for (let i = 0; i < colsNumber; i++) {
      matrix[0][i] = 0;
    }
  }

  if (isFirstColHasZERO) {
    for (let i = 0; i < rowsNumber; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
};

setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]) /// [[1,0,1],[0,0,0],[1,0,1]]
setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]) /// [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
