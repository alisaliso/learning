/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  const array = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === array[array.length - 1]?.char) {
      array[array.length - 1].count++;

      if (array[array.length - 1].count === k) {
        array.pop();
      }
    } else {
      array.push({ char: s[i], count: 1 });
    }
  }

  let ans = '';

  for (const obj of array) {
    let count = obj.count;
    while (count--) {
      ans += obj.char;
    }
  }

  return ans;
};

console.log(removeDuplicates("abcd", 2), "abcd");
console.log(removeDuplicates("deeedbbcccbdaa", 3), "aa");
