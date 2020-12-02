/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const array = [];

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === '+' ||
      tokens[i] === '-' ||
      tokens[i] === '*' ||
      tokens[i] === '/') {
      const a = array.pop();
      const b = array.pop();
      if (tokens[i] === '+') {
        array.push(b + a);
      } else if (tokens[i] === '-') {
        array.push(b - a);
      } else if (tokens[i] === '*') {
        array.push(b * a);
      } else if (tokens[i] === '/') {
        array.push(Math.floor(b / a) < 0 ? Math.ceil(b / a) : Math.floor(b / a));
      }
    } else {
      array.push(Number(tokens[i]));
    }
  }

  return Number(array.pop());
};

console.log(evalRPN(["4", "13", "5", "/", "+"]), 6);
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]), 22);
console.log(evalRPN(
  ["4", "-2", "/", "2", "-3", "-", "-"]), -7);
