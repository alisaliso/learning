/**
 * @param {string} s
 * @return {number}
 */

const findUniq = (array) => {
  const unique = [];
  let passed = {};
  array.map((string) => {
    for (let i = 0; i < string.length; i++) {
      if (passed[string[i]]) {
        passed = {};
        return;
      } else {
        if (i === string.length - 1) {
          unique.push(string);
          passed = {};
          return;
        }

        passed[string[i]] = true;
      }
    }
  })

  const sorted = unique.sort((a, b) => b.length - a.length);
  return sorted[0].length;
}

var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;
  const map = {};
  let substringLen = 0;
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] == null) {
      substringLen += 1;
    } else {
      substringLen = Math.min(i - map[s[i]], substringLen + 1);
    }

    maxLen = Math.max(maxLen, substringLen);
    map[s[i]] = i;
  }

  return maxLen;
};

console.log("Res 3 ->", lengthOfLongestSubstring("abcabcbb"));
console.log("Res 1 ->", lengthOfLongestSubstring("bbbbb"))
console.log("Res 3 ->", lengthOfLongestSubstring("pwwkew"))
console.log("Res 0 ->", lengthOfLongestSubstring(""))
console.log("Res 2 ->", lengthOfLongestSubstring("abba"))
console.log("Res 2 ->", lengthOfLongestSubstring("au"))
