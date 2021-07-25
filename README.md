# Learning Algorithms | Code

## LeetCode

Code challanges on [LeetCode](https://leetcode.com) from **easy** to **hard** level.

&nbsp;

- [Add two linked lists numbers](https://github.com/AlisaLiso/learning/blob/master/leetCode/addTwoNumbers.js)

```js
let linkedList1 = new ListNode(2, new ListNode(4, new ListNode(3))),
  linkedList2 = new ListNode(5, new ListNode(6, new ListNode(4)));

addTwoNumbers(linkedList1, linkedList2);
/// ->> 7, 0, 8
```

&nbsp;

- [Search number in sorted array with binary search](https://github.com/AlisaLiso/learning/blob/master/leetCode/binarySearch.js)

```js
binarySearch([-1, 0, 3, 5, 9, 12], 9);
/// ->> 4 // returns index of element if it exists in array or -1 if not
```

&nbsp;

- [Evaluate reverse Polish notation](https://github.com/AlisaLiso/learning/blob/master/leetCode/evaluateReversePolishNotation.js)

```js
evalRPN(["4", "13", "5", "/", "+"]
/// ->> 6 // returns 6 because Math.floor(13 / 5) + 4 = 6
```

&nbsp;

- [Find maximum consecutive of number 1](https://github.com/AlisaLiso/learning/blob/master/leetCode/findMaxConsecutiveOnes.js)

```js
findMaxConsecutiveOnes([0, 1, 1, 0, 1]);
/// ->> 2

findMaxConsecutiveOnes([0, 1]);
/// ->> 1
```

&nbsp;

- [Find Numbers with Even Number of Digits](https://github.com/AlisaLiso/learning/blob/master/leetCode/findNumbers.js)

```js
findNumbers([12, 345, 2, 6, 7896]);
/// ->> 2
// 12 contains 2 digits (even number of digits).
// 345 contains 3 digits (odd number of digits).
// 2 contains 1 digit (odd number of digits).
// 6 contains 1 digit (odd number of digits).
// 7896 contains 4 digits (even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.

findNumbers([555, 901, 482, 1771]);
/// ->> 1
// Only 1771 contains an even number of digits.
```

&nbsp;

- [Fizz Buzz](https://github.com/AlisaLiso/learning/blob/master/leetCode/fizzBuzz.js)

```js
fizzBuzz(1);
/// ->> ["1"]

fizzBuzz(15);
/// ->> ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
```

&nbsp;

- [Insertion sort in linked list](https://github.com/AlisaLiso/learning/blob/master/leetCode/insertionSortList.js)

```js
const l1 = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))));
const l2 = new ListNode(-1, new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0)))));

insertionSortList(l1))
/// ->> 1 -> 2 -> 3 -> 4

insertionSortList(l2)
/// ->> -1 -> 0 -> 3 -> 4 -> 5
```

&nbsp;

- [Find length of the last word](https://github.com/AlisaLiso/learning/blob/master/leetCode/lengthOfLastWord.js)

```js
lengthOfLastWord("    Hello World   "));
/// ->> 5 // the last word id 'World' and he length of it is 5

lengthOfLastWord(" ")
/// ->> 0
```

&nbsp;

- [Find length of the longest substring](https://github.com/AlisaLiso/learning/blob/master/leetCode/lengthOfLongestSubstring.js)

```js
lengthOfLongestSubstring("abcabcbb");
/// ->> 3 // the longest substring is 'abc'

lengthOfLongestSubstring("bbbbb");
/// ->> 1 // the longest substring is 'b'
```

&nbsp;

- [Find max power](https://github.com/AlisaLiso/learning/blob/master/leetCode/maxPower.js)

```js
maxPower("leetcode");
/// ->> 2 // the max power is 'ee' length

maxPower("abbcccddddeeeeedcba");
/// ->> 5 // the max power is 'eeeee' length
```

&nbsp;

- [Remove duplicated letters](https://github.com/AlisaLiso/learning/blob/master/leetCode/removeDuplicates.js)

```js
removeDuplicates("abcd", 2);
/// ->> 'abcd'

removeDuplicates("deeedbbcccbdaa", 3);
/// ->> 'aa'
```

&nbsp;

- [Find if number exists in 2d matrix with staircase search algorithm](https://github.com/AlisaLiso/learning/blob/master/leetCode/search2dMatrixII.js)

```js
const arr = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

searchMatrix(arr, 5);
/// ->> true

searchMatrix(arr, 20);
/// ->> false
```

&nbsp;

- [Search in rotated sorted array with binary search](https://github.com/AlisaLiso/learning/blob/master/leetCode/searchInRotatedSortedArray.js)

```js
search([1, 3], 1);
/// ->> 0
```

&nbsp;

- [Binary Tree Inorder Traversal](https://github.com/AlisaLiso/learning/blob/master/leetCode/binaryTreeTraversal.js)

```js
let node = TreeNode(1, null, TreeNode(2, TreeNode(3)));
inorderTraversal(node);
/// ->> [1, 3, 2]

preorderTraversal(node);
/// ->> [1, 2, 3]

postorderTraversal(node);
/// ->> [3, 2, 1]
```

&nbsp;

- [Binary Tree Level Order Traversal](https://github.com/AlisaLiso/learning/blob/master/leetCode/levelOrderTraversal.js)

```js
const tree = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
); /// [3,9,20,null,null,15,7]

levelOrderTriversalSimple(tree);
/// ->> [3, 9, 20, 15, 7]

levelOrderTriversal(tree);
/// ->> [3, [9, 20], [15, 7]]
```

&nbsp;

- [Binary Tree Level Order Traversal II](https://github.com/AlisaLiso/learning/blob/master/leetCode/binaryTreeLevelOrderTraversalII.js)

```js
const tree = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
); /// [3,9,20,null,null,15,7]

levelOrderBottom(tree);
/// ->> [[15,7], [9, 20], [3]]
```

&nbsp;

- [Average of Levels in Binary Tree](https://github.com/AlisaLiso/learning/blob/master/leetCode/averageOfLevelsInBinaryTree.js)

```js
const tree = new TreeNode(
  3,
  new TreeNode(1, new TreeNode(4), new TreeNode(6)),
  new TreeNode(5, new TreeNode(0), new TreeNode(2))
); /// [3, 1, 5, 0, 2, 4, 6]

averageOfLevels(tree);
/// ->> [3, 3, 3]
```

&nbsp;

## SkillShare

Code challanges from different courses on [SkillShare](https://www.skillshare.com). Mostly focused on **Data Structure** and basic challanges.

## Cassido

Code challanges in email subscription from [cassido](https://cassidoo.co) focused on general **algorithms** in fun and interesting tasks.

&nbsp;

- [Get list with all possible combinations of valid IPv4 IP addresses](https://github.com/AlisaLiso/learning/blob/master/cassido/getIPsFromString.js)

```js
getIp(‘11211’)
/// ->> ['1.1.2.11', '1.1.21.1', '1.12.1.1', '11.2.1.1']
```

&nbsp;

- [Encode phrase into pig latin](https://github.com/AlisaLiso/learning/blob/master/cassido/encodeIntoPigLatin.js)

```js
encodeIntoPigLatin("Encode into pig latin smile");
/// ->> "Encodeay intoay igpay atinlay ilesmay"
```

&nbsp;

- [Number of pizzas you need to buy](https://github.com/AlisaLiso/learning/blob/master/cassido/gimmePizza.js)

```js
const array = [
  { name: "Joe", num: 9 },
  { name: "Cami", num: 3 },
  { name: "Cassidy", num: 4 },
];

gimmePizza(array, 8);
/// ->> 2 // 16 slices needed, pizzas can be sliced into 8 pieces, so 2 pizzas should be ordered
```

&nbsp;

- [Returns is it a perfect square](https://github.com/AlisaLiso/learning/blob/master/cassido/perfectSquare.js)

```js
perfectSquare(25);
/// ->> true

perfectSquare(10);
/// ->> false
```

&nbsp;

- [Removes the outdated stocks from the queue](https://github.com/AlisaLiso/learning/blob/master/cassido/stockQueue.js)

```js
const snapshot = [
  { sym: "GME", cost: 280 },
  { sym: "PYPL", cost: 234 },
  { sym: "AMZN", cost: 3206 },
  { sym: "AMZN", cost: 3213 },
  { sym: "GME", cost: 325 },
];

stockQueue1(snapshot);
/// ->> [{ sym: ‘PYPL’, cost: 234 },
///      { sym: ‘AMZN’, cost: 3213 },
///      { sym: ‘GME’, cost: 325 }]
```

&nbsp;

- [Implement a ProductList class with methods of additing value and product of the last m numbers](https://github.com/AlisaLiso/learning/blob/master/cassido/ProductList.js)

```js
const p = new ProductList();
p.add(7); /// ->> [7]
p.add(0); /// ->> [7,0]
p.add(2); /// ->> [7,0,2]
p.add(5); /// ->> [7,0,2,5]
p.add(4); /// ->> [7,0,2,5,4]
p.product(3); /// ->> return 40 because 2 * 5 * 4
```

## Unknown

Code challanges from books and other places

&nbsp;

- [Find a Greatest common divisor of two numbers](https://github.com/AlisaLiso/learning/blob/master/unknown/gcd.js)

```js
gcd(544, 119); /// ->> 17
gcd(461952, 116298); /// ->> 18
gcd(7966496, 314080416); /// ->> 32
gcd(24826148, 45296490); /// ->> 526
gcd(300 ^ 40, 2 ^ 57); /// ->> 1
gcd(12, 0); /// ->> 12
gcd(0, 0); /// ->> 0
gcd(0, 9); /// ->> 9
gcd(2, 4); /// ->> 2
gcd(3 ^ 77, 2 ^ 77); /// ->> 1
```
