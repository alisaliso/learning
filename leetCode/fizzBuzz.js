/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const array = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      array.push('FizzBuzz')
    } else if (i % 3 == 0) {
      array.push('Fizz')
    } else if (i % 5 == 0) {
      array.push('Buzz')
    } else {
      array.push(`${i}`)
    }
  }

  return array;
};

console.log(fizzBuzz(1), ["1"])
console.log(fizzBuzz(15), ["1",
  "2",
  "Fizz",
  "4",
  "Buzz",
  "Fizz",
  "7",
  "8",
  "Fizz",
  "Buzz",
  "11",
  "Fizz",
  "13",
  "14",
  "FizzBuzz"])
