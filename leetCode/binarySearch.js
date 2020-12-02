const binarySearch = (nums, target) => {
  let s = 0;
  let e = nums.length - 1;
  let mid = Math.floor((s + e) / 2);

  while (s <= e || e >= s) {
    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      e = mid - 1;
    }

    if (nums[mid] < target) {
      s = mid + 1;
    }

    mid = Math.floor((s + e) / 2);
  }

  return -1;
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9), 4);
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2), -1);
console.log(binarySearch([-1], 2), -1);
