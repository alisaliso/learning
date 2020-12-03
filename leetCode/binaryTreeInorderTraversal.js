
// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorder = function (root, answer) {
  /// Base case
  if (root === null) return;

  /// Go through left side first
  inorder(root.left, answer); // left

  /// Write down value of the current node
  answer.push(root.val); // data

  /// Go throuh right side last
  inorder(root.right, answer); // right
}

var inorderTraversal = function (root) {
  let answer = [];
  /// Call recursive function in order to visit left and right tree values
  inorder(root, answer)

  return answer;
};

let node = TreeNode(1, null, TreeNode(2, TreeNode(3)))

console.log(inorderTraversal(node)) /// ->> [1, 3, 2]
