function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let queue = [];

  if (root === null) return queue;
  let temp = [];
  const res = [];

  queue.push(root);
  queue.push(null);

  while (queue.length !== 0) {
    const elem = queue.shift();

    if (elem === null) {
      res.push(temp);
      temp = [];

      if (queue.length !== 0) queue.push(null);
    } else {
      temp.push(elem.val);

      if (elem.left) queue.push(elem.left);
      if (elem.right) queue.push(elem.right);
    }
  }

  return res.reverse();
};

const tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));

console.log(levelOrderBottom(tree)) /// ->> [[15,7], [9, 20], [3]]
