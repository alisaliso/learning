const selectionSort = (array) => {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let s = i;

    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[s]) {
        s = j;
      }
    }

    let small = array[s];
    array[s] = array[i];
    array[i] = small;
  }

  return array;
}

console.log(selectionSort([3, 4, 2, 1]))
console.log(selectionSort([2, 5, 3, 1, 4, 6]))
