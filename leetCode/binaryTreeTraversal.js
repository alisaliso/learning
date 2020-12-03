
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

var preorder = function (root, answer) {
  if (root === null) return;

  answer.push(root.val);
  preorder(root.left, answer);
  preorder(root.right, answer)
}

var preorderTraversal = function (root) {
  let answer = [];

  preorder(root, answer);

  return answer;
};

var postorder = function (root, answer) {
  if (root === null) return;

  postorder(root.left, answer);
  postorder(root.right, answer);
  answer.push(root.val)
}

var postorderTraversal = function (root) {
  let answer = [];

  postorder(root, answer);

  return answer;
};

console.log(inorderTraversal(node)) /// ->> [1, 3, 2]
console.log(preorderTraversal(node)) /// ->> [1, 2, 3]
console.log(postorderTraversal(node)) /// ->> [3, 2, 1]
