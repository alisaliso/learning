const insertionSort = (A) => {
  for (let j = 1; j < A.length; j++) {
    let i = j - 1;
    let key = A[j];

    while (i >= 0 && A[i] > key) {
      A[i + 1] = A[i];
      i = i - 1;
    }

    A[i + 1] = key;
  }

  return A;
}

const reversedInsertionSort = (A) => {
  for (let j = 1; j < A.length; j++) {
    let i = j - 1;
    let key = A[j];

    while (i >= 0 && A[i] < key) {
      A[i + 1] = A[i];
      i = i - 1;
    }

    A[i + 1] = key;
  }

  return A;
}

console.log(reversedInsertionSort([5, 2, 4, 6, 1, 3]));
