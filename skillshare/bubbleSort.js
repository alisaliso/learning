const bubleSort = (array) => {
  const n = array.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (array[j] > array[j + 1]) {
        let small = array[j];
        array[j] = array[j + 1];
        array[j + 1] = small;
      }
    }
  }

  return array;
}

console.log(bubleSort([3, 4, 2, 1]))
console.log(bubleSort([2, 5, 3, 1, 4, 6]))
