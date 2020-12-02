// Given an array nums of integers, return how many of them contain an even number of digits.
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let evenNums = 0;

  for (const num of nums) {
    if (`${num}`.length % 2 === 0) {
      evenNums++;
    }
  }

  return evenNums;
};

console.log(findNumbers([12, 345, 2, 6, 7896]), 2)
console.log(findNumbers([555, 901, 482, 1771]), 1)
