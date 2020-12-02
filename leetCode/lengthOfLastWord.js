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

var lengthOfLastWord = function (s) {
  // if (!s.length) return 0;

  // const array = s.trim().split(' ');
  // return array[array.length - 1].length;
  return s.trim().split(' ').pop().length;
};

console.log(lengthOfLastWord("    Hello World   "));
console.log(lengthOfLastWord(" "));
