/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start <= end) {
    while (start < end && s[start].match(/[A-Z]|[a-z]|[0-9]/g) == null) start++;
    while (start < end && s[end].match(/[A-Z]|[a-z]|[0-9]/g) == null) end--;

    if (s[start].toLowerCase() !== s[end].toLowerCase()) return false;

    start++;
    end--;
  }

  return true;
};

const check = (A, start, end) => {
  while (start <= end) {
    if (A[start].toLowerCase() !== A[end].toLowerCase()) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

var isPalindromeII = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start <= end) {
    while (start < end && s[start].match(/[A-Z]|[a-z]|[0-9]/g) == null) start++;
    while (start < end && s[end].match(/[A-Z]|[a-z]|[0-9]/g) == null) end--;

    if (s[start].toLowerCase() !== s[end].toLowerCase()) {
      if (check(s, start + 1, end) || check(s, start, end - 1)) {
        return true;
      } else {
        return false;
      }
    };

    start++;
    end--;
  }

  return true;
};

// console.log(isPalindromeII("A man, a plan, a canal: Panama"), true);
// console.log(isPalindromeII("ab2a"), true);
console.log(isPalindromeII("abca"), true);
// console.log(isPalindromeII("abcdfcba"), true);
// console.log(isPalindromeII("abacdcba"), true);
// console.log(isPalindromeII("abc"), false);
console.log(isPalindromeII("eeccccbebaeeabebccceea"), false);
