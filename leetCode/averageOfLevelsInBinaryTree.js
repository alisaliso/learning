function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const queue = [];
  if (root === null) return queue;

  const res = [];
  let temp = [];
  queue.push(root);
  queue.push(null);

  while (queue.length !== 0) {
    const elem = queue.shift();

    if (elem === null) {
      let average = 0;
      const sum = temp.reduce((a, b) => a + b, 0);

      if (temp.length > 1) {
        average = sum / temp.length;
      } else {
        average = sum;
      }

      res.push(average);
      temp = [];

      if (queue.length !== 0) queue.push(null);
    } else {
      temp.push(elem.val);

      if (elem.left) queue.push(elem.left);
      if (elem.right) queue.push(elem.right);
    }
  }

  return res;
};

// [3, 1, 5, 0, 2, 4, 6]
const tree = new TreeNode(3, new TreeNode(1, new TreeNode(4), new TreeNode(6)), new TreeNode(5, new TreeNode(0), new TreeNode(2)));

console.log(averageOfLevels(tree)) /// ->> [3, 3, 3]
