/// Solving with loop
// var lengthOfLastWord = function (s) {
//   let wordStarted = false;
//   let count = 0;

//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] !== ' ') {
//       wordStarted = true;
//       count++;
//     } else {
//       if (wordStarted) {
//         return count;
//       }
//     }
//   }

//   return count;
// };

/// Solving with inbuild functions
var lengthOfLastWord = function (s) {
  return s.trim().split(' ').pop().length;
};

console.log(lengthOfLastWord("    Hello World   "));
console.log(lengthOfLastWord(" "));
