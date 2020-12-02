/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  if (s.length === 1) return 1;

  let longest = 1;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let prev = s[i + 1];

    if (s[i] == prev) {
      longest++;
    } else {
      if (longest > max) {
        max = longest;
      }
      longest = 1;
    }
  }

  return max;
};

console.log(maxPower("leetcode"), 2)
console.log(maxPower("leeeetcode"), 4)
console.log(maxPower("abbcccddddeeeeedcba"), 5)
console.log(maxPower("triplepillooooow"), 5)
console.log(maxPower("hooraaaaaaaaaaay"), 11)
console.log(maxPower("tourist"), 1)
console.log(maxPower("cc"), 2)
