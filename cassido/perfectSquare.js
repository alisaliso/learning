// Given a positive integer n, write a function that
// returns true if it is a perfect square and false otherwise.
// Don’t use any built-in math functions like sqrt.
// Hint: Use binary search!

const perfectSquare = (num) => {
  let start = 1;
  let end = num;
  let ans = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (mid * mid > num) {
      end = mid - 1;
    } else {
      ans = start;
      start = mid + 1;
    }
  }

  return ans * ans === num;
}

console.log(perfectSquare(25), true)
console.log(perfectSquare(10), false);
console.log(perfectSquare(50), false);
console.log(perfectSquare(9), true);
