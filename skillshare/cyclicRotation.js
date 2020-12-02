function cyclicRotation(A, K) {
  if (A.length <= 1 || A.length > 100 || K <= 0 || K > 100) return A;

  const numsOutOfRange = A.filter((num) => num < -1000 || num > 1000);

  if (numsOutOfRange.length > 0) return A;

  let i = 0;
  const copyArray = A.slice();

  while (i < K) {
    i++;
    const lastNum = copyArray.pop();
    copyArray.unshift(lastNum);
  }

  return copyArray;
}

console.log(cyclicRotation([3, 8, 9, 7, 6], 3));
