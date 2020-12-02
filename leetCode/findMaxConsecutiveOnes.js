/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  if (nums.length === 1 && nums[0] === 1) return 1;
  if (nums.length < 1) return 0;

  let longest = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      longest++;
    } else {
      if (longest > max) {
        max = longest;
      }

      longest = 0;
    }
  }

  if (longest > max) {
    max = longest;
  }

  return max;
};

console.log(findMaxConsecutiveOnes([0, 1]), 1);
console.log(findMaxConsecutiveOnes([0, 1, 1, 0, 1]), 2);
console.log(findMaxConsecutiveOnes([0]), 0);
console.log(findMaxConsecutiveOnes([1]), 1);
console.log(findMaxConsecutiveOnes([1, 1, 1, 0, 1, 1]), 3);
