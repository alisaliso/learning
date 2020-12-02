const binarySearch = (nums, target) => {
  let s = 0;
  let e = nums.length - 1; // 5
  let mid = Math.floor((s + e) / 2); // 3

  while (s <= e || e >= s) {
    if (nums[mid] === target) return mid; // 5. 9 // 9 === 9

    if (nums[mid] > target) { // 5 < 9 //
      e = mid - 1;
    }

    if (nums[mid] < target) { // s = 3 + 1 = 4
      s = mid + 1;
    }

    mid = Math.floor((s + e) / 2); // 4 + 5 / 2 = 4
  }

  return -1;
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9), 4);
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2), -1);
console.log(binarySearch([-1], 2), -1);
