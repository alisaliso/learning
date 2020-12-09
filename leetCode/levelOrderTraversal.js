function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

function levelOrderTriversalSimple(params) {
  let queue = [];
  let res = [];
  queue.push(params);

  while (queue.length !== 0) {
    let elem = queue.shift();
    res.push(elem.val)

    if (elem?.left) {
      queue.push(elem.left)
    }

    if (elem?.right) {
      queue.push(elem.right)
    }
  }

  console.log(res);
}

/// [3,9,20,null,null,15,7]
const tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(levelOrderTriversalSimple(tree)) /// Result ->> [3, 9, 20, 15, 7]

function levelOrderTriversal(params) {
  let queue = [];
  if (params === null) return queue;

  let res = [];
  let temp = []; // Current level values
  queue.push(params);
  queue.push(null); // Null is for dividing levels

  while (queue.length !== 0) {
    let elem = queue.shift();

    if (elem === null) {
      res.push(temp);
      temp = [];
      if (queue.length !== 0) {
        queue.push(null)
      }

    } else {
      temp.push(elem.val);

      if (elem?.left) {
        queue.push(elem.left)
      }

      if (elem?.right) {
        queue.push(elem.right)
      }
    }
  }

  return res;
}

console.log(levelOrderTriversal(tree)) /// Result ->> [3, [9, 20], [15, 7]]
